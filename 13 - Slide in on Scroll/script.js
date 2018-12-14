const images = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function slideIn() {
    images.forEach(image => {
        const bottom = window.scrollY + window.innerHeight;
        const midOfImage = image.offsetTop + image.height/2;
        const bottomOfImage = image.offsetTop + image.height;
        const isHalfShown = bottom > midOfImage;
        const isScrolledPastImage = window.scrollY > bottomOfImage;
        if(isHalfShown && !isScrolledPastImage){
            image.classList.add("active");
        }
        else{
            image.classList.remove("active");
        }
    })

}

window.addEventListener("scroll",debounce(slideIn));