$(document).ready(function(){
    $('.portfolio__gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        appendArrows: $('.portfolio__gallery-arrows'),
        nextArrow: '<i class="fa fa-arrow-circle-right portfolio__gallery-next"></i>',
        prevArrow: '<i class="fa fa-arrow-circle-left portfolio__gallery-prev"></i>',
        dots: false
    });
});
