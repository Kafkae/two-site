import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import FontFaceObserver from 'FontFaceObserver';
import '../blocks/main-menu/main-menu.js'
import '../blocks/search-button/search-button.js'
import '../blocks/slider/slider.js'
import '../blocks/message/message.js'
import '../blocks/gallery/gallery.js'
import '../blocks/arrow-scroll/arrow-scroll.js'

$(() => {
    svg4everybody();
});

//fix font

// var main = new FontFaceObserver('Myriad Pro');
// var sub = new FontFaceObserver('Raleway');

// main.load().then(function() {
//     document.documentElement.className += " fontOneLoad";
// });

// sub.load().then(function() {
//     document.documentElement.className += " fontOneLoad";
// });




// var fontOneLoad = new FontFaceObserver('НАЗВАНИЕ_ШРИФТА', {});
// fontOneLoad
//   .check()
//   .then(function () { // событие, когда шрифт загружен
//      // добавляем класс тегу html 
//      document.documentElement.className += " fontOneLoad";
//    });