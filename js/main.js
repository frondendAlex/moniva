document.addEventListener("DOMContentLoaded", () => {

  $("#phone_1").mask("(+7) 999-999 99 99");
  $("#phone_2").mask("(+7) 999-999 99 99");
  
  // Lazy Load
  let images = document.querySelectorAll("img");
  lazyload(images);

  // Scroll Fixed Menu
  const headerFixed = document.querySelector('.header');
  const headerForm = document.querySelector('.header__form');

  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.burger__menu');
  const menu = document.querySelector('.header__menu');

  // Scroll Fixed Menu
  window.addEventListener('scroll', (e) => {
    let scrollHeight = window.pageYOffset;

    if (scrollHeight >= 700) {
    headerFixed.classList.add('active');
    document.querySelector('.header__form').style.display = 'none';
    document.querySelector('.header__contact-time').style.display = 'none';
    document.querySelector('.header__bascet').style.display = 'none';
    document.querySelector('.header__fixed-tel ').style.display = 'block';
    burger.classList.add('active-fixed'); 
    } else {
    headerFixed.classList.remove('active');
    document.querySelector('.header__form').style.display = 'flex';
    document.querySelector('.header__contact-time').style.display = 'block';
    document.querySelector('.header__bascet').style.display = 'block';
    document.querySelector('.header__fixed-tel ').style.display = 'none';
    burger.classList.remove('active-fixed');
    }
  
    })
// const windowInnerWidth = window.innerWidth;
// console.log(windowInnerWidth);

// Burger menu
  burger.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('active');
  })

// Slider Popular
  const swiperPopular = new Swiper('.swiper-popular', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

// Slider Client
const swiperClient = new Swiper('.swiper-client', {

  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1210: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  }

});

// Slider Feedback
const swiperFeedback = new Swiper('.swiper-feedback', {

  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

});

// Input File
let inputsFile = document.querySelectorAll('.application__form-input-file');
    Array.prototype.forEach.call(inputsFile, function (input) {
      let labelText = input.nextElementSibling;
      let labelVal = labelText.querySelector('.application__form-input-file-text').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1) {
          countFiles = this.files.length;
        }
        
        if (countFiles) {
          labelText.querySelector('.application__form-input-file-text').innerText = 'Выбрано файлов: ' + countFiles;
        } else {
          labelText.querySelector('.application__form-input-file-text').innerText = labelVal;
        }
        
      });
    });

//Maps
window.addEventListener('scroll', () => {

  let scrollHeightMap = window.pageYOffset;
  const sectionMaps = document.querySelector('.section-maps');

  if (scrollHeightMap >= 6700) {
    sectionMaps.style.display = 'block';
  }

})

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
          center: [56.027429, 37.422027],
          zoom: 4
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Главный офис',
          balloonContent: 'Главный офис'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'images/icon/icon__map-mark.svg',
          // Размеры метки.
          iconImageSize: [47, 51],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([44.948237, 34.100318], {
          hintContent: 'Производство',
          balloonContent: 'Производство',
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/icon/icon__map-mark.svg',
          // Размеры метки.
          iconImageSize: [47, 51],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 150],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});

});