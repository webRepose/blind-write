'use strict';
// window.localStorage.setItem('url', 'text/start.html');
function focusText(){ document.querySelector('#tt-input-area').focus();};
focusText();
const blockInput = document.querySelector('.tt-input-text'),
inputArea =  document.querySelector('#tt-input-area'),
inputText = document.querySelector('#tt-input-t-p'),
inputErorr = document.querySelector('.tt-input-error'),
inputWords = document.querySelector('.tt-input-words'),
inputSimbols = document.querySelector('.tt-input-simbols'),
timerBlock = document.querySelector('.tt-input-timer_block'),
timerRes = document.querySelector('.tt-count-time-res');
timerBlock.addEventListener('click', ()=>{
    timerBlock.classList.toggle('_disabledOpacity');
})
blockInput.addEventListener('click', ()=>{
    focusText();
})

inputText.addEventListener('click', ()=>{
    inputArea.focus();
})

const storageMin = window.localStorage.getItem('min');
let ttTimer = document.querySelector('.tt-input-timer');
let ttTimerSec = document.querySelector('.tt-input-timer-sec');
let ttTimerCount = 0;
let ttTimerCountSec = 0;

function statsTimer() {
    ttTimerCountSec = 59;
    ttTimer.innerHTML = ttTimerCount + ':';
    ttTimerSec.innerHTML = ttTimerCountSec;
}

let timerHis;
if(storageMin) {
    if(storageMin == 'one') {
        ttTimerCount = 0;
        statsTimer();
        timerRes.innerHTML = '0:59';
        timerHis = '1 мин';
    } else if(storageMin == 'three') {
        ttTimerCount = 2;
        statsTimer();
        timerRes.innerHTML = '2:59';
        timerHis = '3 мин';
    } else if(storageMin == 'five') {
        ttTimerCount = 4;
        statsTimer();
        timerRes.innerHTML = '4:59';
        timerHis = '5 мин';
    }
}

function timerSec() {
    ttTimerCountSec--;
    ttTimerSec.innerHTML = ttTimerCountSec;
    if(ttTimerCountSec < 10) {
        ttTimerSec.innerHTML = '0' + ttTimerCountSec;
    }
    if(ttTimerCountSec == 0) {
        ttTimerCountSec = 59;
        ttTimerCount--;
        ttTimerSec.innerHTML = ttTimerCountSec;
        ttTimer.innerHTML = ttTimerCount + ':';
    }
    else if(ttTimerCount == 0 && ttTimerCountSec == 1) {
            clearInterval(intervalStart);
            ttTimerSec.innerHTML = '00';
            setTimeout(()=>{
                document.querySelector('.tt-input-blur-eff').classList.add('tt-input-result');
                document.querySelector('.tt-input-blur').classList.add('_active');
                inputArea.blur();
                inputArea.value = '';
                document.querySelector('html').style.overflow = 'hidden';
            }, 0);
            

            let historyMode;
            if(window.localStorage.getItem('mode') == 'word-input'){
                historyMode = 'Ввод текста';
            } else if(window.localStorage.getItem('mode') == 'time-input') {
                historyMode = 'Ввод текста';
            }
            let offset = new Date().toLocaleDateString();
            let offsetNow = new Date().toLocaleTimeString();


            let check = JSON.parse(localStorage.getItem('HistoryData'));
            let historyArray;
            if(check!==null) {
                historyArray = check;
            } else {
                historyArray = [];
            }
            
            let historyData =
            {
                    mode: historyMode,
                    timer: timerHis,
                    words: wordsCount,
                    symbols: simbolsCount,
                    errors: errorCount,
                    timesNow: offsetNow,
                    times: offset 
            };
                historyArray.push(historyData);
                window.localStorage.setItem('HistoryData', JSON.stringify(historyArray));

    }
}



let countClickTimer = 0;
let intervalStart = 0;
function startTimer() {
    countClickTimer++;
    if(countClickTimer >= 2) {
        return false;
    }

        if (storageMin == 'three') {
                intervalStart = setInterval(()=>{
                timerSec();
            }, 1000);
        } else if (storageMin == 'one') {
                intervalStart = setInterval(()=>{
                timerSec();
            }, 100);
        } else if (storageMin == 'five') {
                intervalStart = setInterval(()=>{
                timerSec();
            }, 1000);
        }
    }

    function backSpace() {
    var backFun = inputArea.value;
    backFun = backFun.substr(0,backFun.length - 1);
    inputArea.value = backFun;
    }

    let d = 0;
    let simbolsCount = 0,
    errorCount = 0,
    wordsCount = 0,
    rightValue = 0;
    inputArea.onkeydown = function(event) {
        if(event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 18 || event.keyCode == 20 || event.keyCode == 19) {
            return false
        }
        // if(inputText.value === 'Д') {
        //    d = 76
        // } else if(inputText.value === 'а') {
        //     d = 70
        // }
        console.log(event.keyCode)
        startTimer();
        if(event.keyCode == inputText.value) {
            rightValue++;
            inputText.value = textInput[rightValue];
            if(event.key == ' ' || event.key == '-' ) {
                wordsCount++;
                inputWords.innerHTML = wordsCount;
                window.localStorage.setItem('WordsCount', wordsCount);
                document.querySelector('.tt-count-word-res').innerHTML = wordsCount;
            }
            else if(textInput[rightValue]) {
                simbolsCount++;
                inputSimbols.innerHTML = simbolsCount;
                window.localStorage.setItem('SimbolsCount', simbolsCount);
                document.querySelector('.tt-count-simbol-res').innerHTML = simbolsCount;
            }
            

        } else {
            // backSpace()
            errorCount++;
            inputErorr.innerHTML = errorCount;
            window.localStorage.setItem('ErrorsCount', errorCount);
            document.querySelector('.tt-count-error-res').innerHTML = errorCount;
            setTimeout(backSpace, 0);
            blockInput.style.border = '1px solid red';
            setTimeout(()=>{
                blockInput.style.border = '1px solid #686868';
            }, 500);
        }
    };

    if(location.reload) {
        window.localStorage.setItem('SimbolsCount', simbolsCount);
        window.localStorage.setItem('WordsCount', wordsCount);
        window.localStorage.setItem('ErrorsCount', errorCount);
    }


    if(window.localStorage.getItem('mode') == 'word-input') {
        const storageWords = window.localStorage.getItem('words');
        if(storageWords) {
            if(storageWords == '50') {
                console.log('50');
            } else if(storageWords == '70') {
                console.log('70');
            } else if(storageWords == '100') {
                console.log('100');
            }
        }
    }
