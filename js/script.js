let par = document.querySelector('#par');
let x,y;

window.addEventListener('scroll', () => {
    y = 10 - window.scrollY / 40;
    par.style.transform = `skewY(${y}deg)`
})