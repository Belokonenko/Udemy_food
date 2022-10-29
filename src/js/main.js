'use strict'

document.addEventListener("DOMContentLoaded", () => {
    
    //========tabs============
    let wrapTabHeaderItems = document.querySelector('.tabheader__items');
    let tabHeaderItems = document.querySelectorAll('.tabheader__item');
    let tabContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        }); 

        tabHeaderItems.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContant(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabHeaderItems[i].classList.add('tabheader__item_active')
    }
    
    hideTabContent();
    showTabContant();

    wrapTabHeaderItems.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('tabheader__item')) {
            tabHeaderItems.forEach((item,i) => {
                if(e.target === item){
                    hideTabContent();
                    showTabContant(i);
                }
            });
        }
    });
    //========/tabs============
    
    
    //========date ============
    const deadline = "2023-05-11";
    
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24); 
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };

    }; 

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days  = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHtml = t.days;
            hours.innerHtml = t.hours;
            minutes.innerHtml = t.minutes;
            seconds.innerHtml = t.seconds;

            // if(t.total <= 0) {
            //     clearInterval(timeInterval);
            // };
        };
    };

    setClock('.timer', deadline);
    //========/date============
});


