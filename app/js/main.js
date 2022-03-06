let profile = document.querySelector('.profile');
let burger = document.querySelector('.burger');
let bgIndex = 0;
let bgInterval = 10000;
let bgElement = document.querySelector('.head');
const bgImages = [
    '../images/bg1.jpg',
    '../images/bg2.jpg'
];

// Выпадающее меню
if (document.documentElement.clientWidth > 920) {
    profile.addEventListener('click', function() {
        document.querySelector('.dropdown__wrapper').classList.toggle('hidden');
    });
}

// Бургер
burger.addEventListener('click', function() {
    document.querySelector('.header__inner-wrapper').classList.toggle('active');
});

// Смена фона
function bgChange() {
    bgElement.style.backgroundImage = 'url(' + bgImages[bgIndex] + ')';
    bgIndex++;
    if (bgIndex >= bgImages.length) {
        bgIndex = 0;
    }
}
bgChange();
window.setInterval(bgChange, bgInterval);






