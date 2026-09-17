const languageButton=document.getElementById('language');
function setLanguage(chinese){document.documentElement.lang=chinese?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[chinese?'zh':'en']);languageButton.innerHTML=chinese?'EN <span>↗</span>':'中文 <span>↗</span>';languageButton.setAttribute('aria-label',chinese?'Switch to English':'切换为中文');}
languageButton.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'));
const menuButton=document.querySelector('.menu-toggle'),nav=document.getElementById('main-nav');
function closeMenu(){nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
document.getElementById('year').textContent=new Date().getFullYear();
