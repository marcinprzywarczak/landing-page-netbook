
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(tabButton => {
   tabButton.addEventListener('click', (event) => {
       tabButtons.forEach(tabButton => {
           tabButton.classList.remove('tab-button-active');
       });
       event.target.classList.add('tab-button-active');

       tabButtons.forEach(tabButton => {
           const tab = document.querySelector(tabButton.dataset.tab);
           if(tabButton.classList.contains('tab-button-active')) {

               console.log(tab);
               tab.classList.remove('hidden');
           } else {
               tab.classList.add('hidden');
           }
       });



   })
});
document.querySelector('#activeButton').click();


const mobileMenuButton = document.querySelector('#mobileMenuButton');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('rotate-180');
    document.querySelector('.mobile-menu').classList.toggle('overflow-hidden');
    if(document.querySelector('.mobile-menu').classList.contains('overflow-hidden')) {
        document.querySelector('.mobile-menu').style.height = '0px';
    } else {
        document.querySelector('.mobile-menu').style.height = '100%';
    }


    document.body.classList.toggle('overflow-hidden');
    document.querySelectorAll('.sectionOpacity').forEach(el => {
        el.classList.toggle('opacity-50');
    })
});

document.addEventListener("click", function(evt) {
    let flyoutEl = document.querySelector('.mobile-menu'),
        targetEl = evt.target;
    do {
        if(targetEl === flyoutEl || targetEl === mobileMenuButton ) {
            return;
        }
        targetEl = targetEl.parentNode;
    } while (targetEl);

    document.querySelector('.mobile-menu').style.height = '0px';
    document.body.classList.remove('overflow-hidden');
    document.querySelector('.mobile-menu').classList.add('overflow-hidden');
    document.querySelectorAll('.sectionOpacity').forEach(el => {
        el.classList.remove('opacity-50');
    })
});