const button = document.querySelector('button');
const h2e1 = document.querySelector('h2');
const section = document.querySelector('section');

button.addEventListener('click', () => {
    let color = '#'
    const random = Math.random().toString(16).slice(2, 8);
    color = color + random;
    section.style.backgroundColor = color;
    h2e1.innerText = color;
    console.log(color)
})
