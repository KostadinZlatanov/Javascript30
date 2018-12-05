const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const places = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => places.push(...data));

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(wordToMatch, places) {
    return places.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function displayMatches() {
    const matches = findMatches(this.value,places);
    const regex = new RegExp(this.value,'gi');

    const matchesHtml = matches.map(match =>{
        const cityName = match.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const stateName = match.state.replace(regex,`<span class="hl">${this.value}</span>`);

        return`
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(match.population)}</span>
        </li>
        `
    }).join('');
    console.log(matchesHtml);
    suggestions.innerHTML = matchesHtml;
}

search.addEventListener('change',displayMatches);
search.addEventListener('keyup',displayMatches);
