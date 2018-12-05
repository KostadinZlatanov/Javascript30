const panels = document.querySelectorAll(".panel");

function toggleOpen()
{
    this.classList.toggle("open");
}

function toggleActive(t)
{
    if(!t.propertyName.includes("flex")) return;
    console.log(t);
    this.classList.toggle("active");
}

panels.forEach(panel => panel.addEventListener("click",toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend",toggleActive));