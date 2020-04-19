// var greeting = "hola, ";
// var button = document.getElementById("mybutton");
// button.person_name = "Roberto";
// button.addEventListener("click", function() {
//   alert(greeting + button.person_name + ".");
// }, false);
// alert("hello");
// const tabs = document.querySelector('.tabs-content');
// tabs.remove();

const mailSelectors = [
    '.tabs-content',
    '.tabs',
    '.wrapper',
    '.pulse-lenta',
    '.i-pull-right.grid__rcol',
];

const yandexSelectors = [
    '[data-dep-bundle="direct-invertion"]',
    '.ya-chat-widget',
    '.services-new',
    '[id^="wd-"]',
    '.news__header',
    '.container__first',
    '.container__banner',
    '.container__heap',
    '.stream-promo-popup',
    '.rows__row_last',
    '.desk-notif-card__card:not([aria-label="Авторизация"])',
];


[...mailSelectors, ...yandexSelectors].forEach(selector => {
    const nodes = document.querySelectorAll(selector);
    if (nodes.length !== 0) {
        nodes.forEach(node => node.remove());
    }
});
