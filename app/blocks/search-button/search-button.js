import $ from 'jquery';

$('.search-button__btn-search').click(function() {
    $('.search-button__search-form').animate({ right: 0 }, 50);
    $('.search-button__search-popup').show();
    $('.search-button__search-bg').click(function() {
        $('.search-button__search-popup').hide();
        $('.search-button__search-form').animate({ right: '-100%' }, 50);
    });
});