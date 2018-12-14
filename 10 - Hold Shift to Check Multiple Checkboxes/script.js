const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
let lastChecked = checkboxes[0];


function handleCheck(e)
{
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if(checkbox === lastChecked || checkbox === this)
                inBetween = !inBetween;
            if(inBetween)
                checkbox.checked = true;
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click",handleCheck);
})