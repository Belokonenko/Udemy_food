'use strict'

document.addEventListener("DOMContentLoaded", () => {
    
    //========tabs============
    let wrapTabHeaderItems = document.querySelector('.tabheader__items');
    let tabHeaderItems = document.querySelectorAll('.tabheader__item');
    let tabContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show');
        }); 

        tabHeaderItems.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContant(i = 0) {
        tabContent[i].classList.add('show');
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
});

