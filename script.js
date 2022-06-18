let lang = localStorage.getItem('language') || navigator.language || navigator.userLanguage;
lang = lang.toLowerCase();
const ru_lang = document.querySelector(".ru_lang");
const en_lang = document.querySelector(".en_lang");
const burger = document.querySelector('.burger');
const popup = document.querySelector('.nav_ul');

function engToRu(){
  for(let elem of document.querySelectorAll('.eng_elem')){
    elem.classList.add('hidden');
  }
  for(let elem of document.querySelectorAll('.ru_elem')){
    elem.classList.remove('hidden');
  }
  en_lang.classList.remove('lang_active');
  ru_lang.classList.add('lang_active');
  lang = 'ru';
  localStorage.setItem('language', lang);
}

function ruToEng(){
  for(let elem of document.querySelectorAll('.ru_elem')){
    elem.classList.add('hidden');
  }
  for(let elem of document.querySelectorAll('.eng_elem')){
    elem.classList.remove('hidden');
  }
  en_lang.classList.add('lang_active');
  ru_lang.classList.remove('lang_active');
  lang = 'en';
  localStorage.setItem('language', lang);
}

function changeBurger(){
  burger.classList.toggle('burger_opened');
  burger.classList.toggle('burger_closed');
  popup.classList.toggle('nav_hidden');
}

if(lang.includes('ru')){
  engToRu();
}

ru_lang.addEventListener('click', engToRu);
en_lang.addEventListener('click', ruToEng);

burger.addEventListener('click', changeBurger)