$(document).ready(function () {
    $('.review-slider').slick({
        slidesToShow: 1,
        infinity: 1,
        arrows: false,
        dots: true
    });

    $('.burger').on('click', function () {
        $('.header-nav').toggleClass('show') && $('.burger').toggleClass('transform');;
    })
});