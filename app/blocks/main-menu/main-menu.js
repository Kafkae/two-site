import $ from 'jquery';

$(document).ready(function() {
    $(".burger").on("click", function() {
        $(".burger__line").toggleClass("burger__line_active");
        $(".main-menu").toggleClass("main-menu_mobile");
        $(".main-menu__wrap").toggleClass("main-menu__wrap_mobile");
        $(".main-menu__link").toggleClass("main-menu__link_mobile");
        $(".main-menu__item").toggleClass("main-menu__item_mobile");
        $(".header__hg-group").toggleClass("header__hg-group_mobile");
    });
});