import 'owl.carousel'


$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
    });
});