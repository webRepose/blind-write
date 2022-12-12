'use strict';
let txt = {
    en: {
        'main':'Home',
        'print-text':'Text',
        'print-code':'Code',
        'print-capcha':'Capcha',
        'print-simbol':'Spec symbols',

        // 'welc-write':'Welcome to Fast Write!',
        // 'welc-here':'Here you can train touch typing, typing speed, and follow your progress.',
        // 'before-it':'Recent',
        // 'chars-it':'Statistics',
        // 'history-it':'History',
        // 'clue-it':'Help',
        // 'guid-header':'Guids',

        // 'tt-header':'Type text!',
        // 'tt-chan-text':'Change text',
        // 'tt-result-lan':'Your results',
        // 'tt-allWords-lan':'Total words:',
        // 'tt-allSimb-lan':'Total symbols:',
        // 'tt-allError-lan':'Total errors:',
        // 'tt-allTime-lan':'Total time:',
        // 'tt-count-words':'Words',
        // 'tt-count-symbols':'Symbols',
        // 'tt-count-errors':'Errors',
    },
    ru: {
        'main':'Главная',
        'print-text':'Текст',
        'print-code':'Код',
        'print-capcha':'Капча',
        'print-simbol':'Спец символы',

        // 'welc-write':'Добро пожаловать в Fast Write!',
        // 'welc-here':'Здесь вы можете тренировать слепую печать, скорость печати, следя за своим прогрессом.',
        // 'before-it':'Недавнее',
        // 'chars-it':'Статистика',
        // 'history-it':'История',
        // 'clue-it':'Подсказки',
        // 'guid-header':'Гайды',

        // 'tt-header':'Набирайте текст!',
        // 'tt-chan-text':'Сменить текст',
        // 'tt-result-lan':'Ваши результаты',
        // 'tt-allWords-lan':'Всего слов:',
        // 'tt-allSimb-lan':'Всего символов:',
        // 'tt-allError-lan':'Всего ошибок:',
        // 'tt-allTime-lan':'Общее время:',
        // 'tt-count-words':'Слов',
        // 'tt-count-symbols':'Символов',
        // 'tt-count-errors':'Ошибок',
    },
  };

  const menuLang = document.querySelector('.menu-lang'),
    buttonLang = document.querySelector('.header-lang');
    buttonLang.addEventListener('click',()=>{
        menuLang.classList.toggle('_active');
        menuLang.classList.remove('_disabled');
    })

    document.querySelector('main, footer').addEventListener('click', none => menuLang.classList.remove('_active'));
    
    const langText = document.querySelector('#lang-text');
    document.querySelector('#Ru').addEventListener('click', ()=> {
        langText.innerHTML = 'Ru';
        menuLang.classList.remove('_active');
        menuLang.classList.toggle('_disabled');
        // location.href = window.location.pathname + '#ru';
        // location.reload();
    })
    document.querySelector('#En').addEventListener('click', ()=> {
        langText.innerHTML = 'En';
        menuLang.classList.remove('_active');
        menuLang.classList.toggle('_disabled');
        // location.href = window.location.pathname + '#en';
        // location.reload();
    })
  
  document.getElementById('En').addEventListener('click', setLang.bind(null,'en'));
  document.getElementById('Ru').addEventListener('click', setLang.bind(null,'ru'));
  
  function setLang(lang){
    let p;
    if(!txt.hasOwnProperty(lang)) return;
    if(window.hasOwnProperty('localStorage'))
       window.localStorage.setItem('lang', lang);
    for(p in txt[lang]) {
      document.getElementById(p).innerText = txt[lang][p];
    }
  }

  
  var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
  setLang(lang);
  
  if(lang == 'ru') {
      document.querySelector('#lang-text').innerHTML = 'Ru';
      // location.href = window.location.pathname + '#ru';
  } else if(lang == 'en') {
      document.querySelector('#lang-text').innerHTML = 'En';
      // location.href = window.location.pathname + '#en';
  }