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
    
    
    //========/date============
    const deadline = '2024-06-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num <= 0) { 
            return '0';
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days    = timer.querySelector("#days"),
            hours   = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML    = getZero(t.days);
            hours.innerHTML   = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
//========/date============

//========modal_window============
    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');
    
    modalTrigger.forEach((item) => {
        item.addEventListener('click', openModal);
    });
    
    function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show');
            document.body.style.overflow='hidden';//stop move scrol site
            clearTimeout(modalTimerId);
    }
    
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow='';//move scrol site
    }
    
    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        };
    });

    const modalTimerId = setTimeout(openModal, 2000);

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement
            .clientHeight >= document.documentElement.scrollHeight -19){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    } 

    window.addEventListener('scroll', showModalByScroll);
//========modal_window============

});


