const menu1 = document.querySelector('.hidemenu1');
const menu2 = document.querySelector('.hidemenu2');
const menu3 = document.querySelector('.hidemenu3');
const menu4 = document.querySelector('.hidemenu4');

const button1 = document.querySelector('.buttonFooter1');
const button2 = document.querySelector('.buttonFooter2');
const button3 = document.querySelector('.buttonFooter3');
const button4 = document.querySelector('.buttonFooter4');

const arrow1 = document.querySelector('.footer_icon1')
const arrow2 = document.querySelector('.footer_icon2')
const arrow3 = document.querySelector('.footer_icon3')
const arrow4 = document.querySelector('.footer_icon4')

button1.addEventListener('click', function() {

    if(menu1.style.display !== 'flex') {
        menu1.style.display = 'flex';
        // menu1.style.transform = 'ease-in-out 1s';
        arrow1.style.transform = 'rotate(270deg)';
    } else {
        menu1.style.display = 'none';
        arrow1.style.transform = 'rotate(90deg)';
    }
})
 
button2.addEventListener('click', function() {

    if(menu2.style.display !== 'flex') {
        menu2.style.display = 'flex';
        arrow2.style.transform = 'rotate(270deg)';
    } else {
        menu2.style.display = 'none';
        arrow2.style.transform = 'rotate(90deg)';
    }
})

button3.addEventListener('click', function() {

    if(menu3.style.display !== 'flex') {
        menu3.style.display = 'flex';
        arrow3.style.transform = 'rotate(270deg)';
    } else {
        menu3.style.display = 'none';
        arrow3.style.transform = 'rotate(90deg)';
    }
})

button4.addEventListener('click', function() {

    if(menu4.style.display !== 'flex') {
        menu4.style.display = 'flex';
        arrow4.style.transform = 'rotate(270deg)';
    } else {
        menu4.style.display = 'none';
        arrow4.style.transform = 'rotate(90deg)';
    }
})









// const menu1 = document.querySelector('.hidemenu1');
// const button1 = document.querySelector('.buttonFooter1');
// const arrow1 = document.querySelector('.footer_icon1')

// button1.addEventListener('click', function() {

//     if(menu1.style.display === 'none') {
//         menu1.style.display = 'flex';
//         menu1.style.transform = 'ease-in-out 1s';
//         arrow1.style.transform = 'rotate(90deg)';
//     } else {
//         menu1.style.display = 'none';
//         arrow1.style.transform = 'rotate(270deg)';
//     }
// })