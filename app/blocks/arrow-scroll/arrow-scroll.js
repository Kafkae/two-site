$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.arrow-scroll').fadeIn();
    } else {
        $('.arrow-scroll').fadeOut();
    }
});

$('.arrow-scroll').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
});