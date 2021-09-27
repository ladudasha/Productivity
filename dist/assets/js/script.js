const circle__svg = document.querySelectorAll('.diagram__circle');

console.log(circle__svg);

const buttonVideo = document.querySelectorAll('.diagram__row-center');
buttonVideo.forEach(el => {
    el.addEventListener('mouseover', () => {
        console.log(1);
    })
})

circle__svg.forEach(el => {
    el.addEventListener('mouseover', () => {
        console.log(1);
    })
})
//# sourceMappingURL=script.js.map
