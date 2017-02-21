$(document).ready(function(){
    $('.portfolio__gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $(".portfolio__gallery-arrows"),
        nextArrow: $('.portfolio__gallery-prev'),
        prevArrow: $('.portfolio__gallery-next'),
        dots: false
    });
});
