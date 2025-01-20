
// header

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {

  if (window.scrollY > headerEl.offsetHeight) {
    headerEl.classList.add('scrolled');
  } else {
    headerEl.classList.remove('scrolled');
  }
});

// slider

const swiper = new Swiper('.feedback .swiper', {
    
  slidesPerView: 2,
    
    navigation: {
      nextEl: '.slider-btn--next',
      prevEl: '.slider-btn--prev',
    },
  
    
});
  
// tabs

const showTabs = (tabsNav, tabsContent) => {
  tabsNav?.forEach((navLink, index) => {
    navLink?.addEventListener('click', () => {
      tabsNav?.forEach(link => {
        link.classList.remove('active');
      });
    

    navLink.classList.add('active');

    let navIndex = index;

      tabsContent.forEach((contentItem, index) => {
        contentItem.classList.remove('active');

        if (index === navIndex) {
          contentItem.classList.add('active');
        }
      });
    });
  });
};

const tabsNav = document.querySelectorAll('.bikes .tabs-nav__link');
const tabsContent = document.querySelectorAll('.bikes .tabs-content');
showTabs(tabsNav, tabsContent);

// burger

const burgerBtnEl = document.querySelector('.burger');

const handleBurgerClick = () => {
  burgerBtnEl.classList.toggle('active');
}

document.addEventListener('click', (e) => {

  //   Вибір залежить від конкретної задачі:

  // Якщо вам потрібно, щоб подія оброблялась незалежно від того, чи клік був на вкладеному елементі всередині .burger, використовуйте closest('.burger').
  // Якщо важливо реагувати тільки на сам елемент із класом burger (і ви впевнені, що кліки на вкладені елементи не потрібні), використовуйте classList.contains('burger').
  // Для навігаційних меню або схожих елементів зазвичай кращим є перший варіант із closest, тому що він забезпечує більш універсальну роботу.

  if (e.target.closest('.burger')) {
    handleBurgerClick();
  }

  // тут крапки в ім'ї класу НЕ повинно бути
  // if (e.target.classList.contains('burger')) {
  //   handleBurgerClick();
  // }

});