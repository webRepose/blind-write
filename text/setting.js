'use strict';
// let historyRecent = window.localStorage.getItem('url');
// let historyRecentAbsolute = '../' + historyRecent;
// document.querySelector('#recent-link').setAttribute('href', historyRecentAbsolute);

// setTimeout(window.localStorage.setItem('url', 'text/setting.html'), 0)

var ttRu = document.querySelector('#tt-ru-button'),
ttEn = document.querySelector('#tt-en-button'),
ttLang = window.localStorage.getItem('lang');
var transpBorder = '1px solid transparent';
var visibleBorder = '1px solid #686868';

if(ttLang == 'ru') {
    window.localStorage.setItem('langTT', 'ru');
    ttRu.style.border = visibleBorder;
} else if(ttLang == 'en') {
    window.localStorage.setItem('langTT', 'en');
    ttEn.style.border = visibleBorder;
}

ttRu.addEventListener('click', ()=>{
    window.localStorage.setItem('langTT', 'ru');
    ttEn.style.border = transpBorder;
    ttRu.style.border = visibleBorder;

})
ttEn.addEventListener('click', ()=>{
    window.localStorage.setItem('langTT', 'en');
    ttRu.style.border = transpBorder;
    ttEn.style.border = visibleBorder;
})


function minReset() {
    ttTimeOne.classList.add('border')
    ttTimeThree.classList.remove('border');
    ttTimeFive.classList.remove('border');
}

function wordsReset() {
    ttWordOne.classList.add('border');
    ttWordTwo.classList.remove('border');
    ttWordThree.classList.remove('border');
}

window.localStorage.setItem('min', 'one');
var ttTimeOne = document.querySelector('.one-min'),
ttTimeThree = document.querySelector('.two-min'),
ttTimeFive = document.querySelector('.three-min');

ttTimeOne.addEventListener('click', ()=>{
    window.localStorage.setItem('min', 'one');
        minReset();
})

ttTimeThree.addEventListener('click', ()=>{
    window.localStorage.setItem('min', 'three');
        ttTimeThree.classList.add('border');
        ttTimeOne.classList.remove('border');
        ttTimeFive.classList.remove('border');
})

ttTimeFive.addEventListener('click', ()=>{
    window.localStorage.setItem('min', 'five');
        ttTimeFive.classList.add('border');
        ttTimeThree.classList.remove('border');
        ttTimeOne.classList.remove('border');
})

var ttWordOne = document.querySelector('.one-words'),
ttWordTwo = document.querySelector('.two-words'),
ttWordThree = document.querySelector('.three-words');

ttWordOne.addEventListener('click', ()=>{
    window.localStorage.setItem('words', '50');
        wordsReset();
})

ttWordTwo.addEventListener('click', ()=>{
    window.localStorage.setItem('words', '70');
        ttWordTwo.classList.add('border');
        ttWordOne.classList.remove('border');
        ttWordThree.classList.remove('border');
})

ttWordThree.addEventListener('click', ()=>{
    window.localStorage.setItem('words', '100');
        ttWordThree.classList.add('border');
        ttWordTwo.classList.remove('border');
        ttWordOne.classList.remove('border');
})


var ttTime = document.querySelector('#tt-mode-time'),
ttWord = document.querySelector('#tt-mode-word'),
ttTimeBlock = document.querySelector('#tt-time-block'),
ttWordBlock = document.querySelector('#tt-word-block');
window.localStorage.setItem('mode', 'time-input');
if(localStorage.getItem('mode') == 'time-input') {
    ttWordBlock.style.display = 'none';
    ttTimeBlock.style.display = 'flex';
}

ttTime.addEventListener('click', ()=>{
    window.localStorage.setItem('mode', 'time-input');
    if(localStorage.getItem('mode') == 'time-input') {
        window.localStorage.removeItem('words');
        window.localStorage.setItem('min', 'one');
        wordsReset();
        ttWord.style.border = transpBorder;
        ttTime.style.border = visibleBorder;
        ttWordBlock.style.display = 'none';
        ttTimeBlock.style.display = 'flex';
    }
})
ttWord.addEventListener('click', ()=>{
    window.localStorage.setItem('mode', 'word-input');
    if(localStorage.getItem('mode') == 'word-input') {
        window.localStorage.removeItem('min');
        window.localStorage.setItem('words', '50');
        minReset();
        ttTime.style.border = transpBorder;
        ttWord.style.border = visibleBorder;
        ttTimeBlock.style.display = 'none';
        ttWordBlock.style.display = 'flex';
    }
})

window.localStorage.removeItem('words');
window.localStorage.setItem('min', 'one');
wordsReset();