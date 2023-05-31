const item1 = document.querySelector('#f-content-1');
const item2 = document.querySelector('#f-content-2');
const item3  = document.querySelector('#f-content-3');
const item4 = document.querySelector('#f-content-4');
const item5 = document.querySelector('#f-content-5');

const botton1 = document.querySelector('#f-content-1bb');
const botton2 = document.querySelector('#f-content-2bb');
const botton3 = document.querySelector('#f-content-3bb');
const botton4 = document.querySelector('#f-content-4bb');
const botton5 = document.querySelector('#f-content-5bb');

const dorrow1 = document.querySelector('.dorrow1')
const dorrow2 = document.querySelector('.dorrow2')
const dorrow3 = document.querySelector('.dorrow3')
const dorrow4 = document.querySelector('.dorrow4')
const dorrow5 = document.querySelector('.dorrow5')

botton1.addEventListener('click', function() {

    if(item1.style.display !== 'flex') {
        item1.style.display = 'flex';
        dorrow1.style.transform = 'rotate(270deg)';
    } else {
        item1.style.display = 'none';
        dorrow1.style.transform = 'rotate(90deg)';
    }
})

botton2.addEventListener('click', function() {

    if(item2.style.display !== 'flex') {
        item2.style.display = 'flex';
        dorrow2.style.transform = 'rotate(270deg)';
    } else {
        item2.style.display = 'none';
        dorrow2.style.transform = 'rotate(90deg)';
    }
})

botton3.addEventListener('click', function() {

    if(item3.style.display !== 'flex') {
        item3.style.display = 'flex';
        dorrow3.style.transform = 'rotate(270deg)';
    } else {
        item3.style.display = 'none';
        dorrow3.style.transform = 'rotate(90deg)';
    }
})

botton4.addEventListener('click', function() {

    if(item4.style.display !== 'flex') {
        item4.style.display = 'flex';
        dorrow4.style.transform = 'rotate(270deg)';
    } else {
        item4.style.display = 'none';
        dorrow4.style.transform = 'rotate(90deg)';
    }
})

botton5.addEventListener('click', function() {

    if(item5.style.display !== 'flex') {
        item5.style.display = 'flex';
        dorrow5.style.transform = 'rotate(270deg)';
    } else {
        item5.style.display = 'none';
        dorrow5.style.transform = 'rotate(90deg)';
    }
})