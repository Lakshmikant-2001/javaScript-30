const inputElements = document.querySelectorAll('input');

function updateValues() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputElements.forEach(input => {
    input.addEventListener('change', updateValues)
});

inputElements.forEach(input => {
    input.addEventListener('mousemove', updateValues)
});
