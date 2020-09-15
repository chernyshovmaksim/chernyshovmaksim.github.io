$(document).ready(function(){
    reviewCarouselInit();
});


var reviewCarouselInit = function(){
    $('.reviews-wrapper').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
};