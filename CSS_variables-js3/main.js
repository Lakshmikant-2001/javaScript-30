const inputElements = document.querySelectorAll('input');
console.log(inputElements)

function updateValues() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputElements.forEach(input => {
    input.addEventListener('click', updateValues)
});

inputElements.forEach(input => {
    input.addEventListener('mousemove', updateValues)
});
