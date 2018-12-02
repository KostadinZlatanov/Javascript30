function handleChanges() {
    const suffix = this.dataset.sf || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

const inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener("change",handleChanges));
inputs.forEach(input => input.addEventListener("mousemove",handleChanges));