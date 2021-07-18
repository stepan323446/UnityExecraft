$(function(){
    $('.burger').click(function(e){
        $('.burger').toggleClass('active');
        $('.burger-panel').toggleClass('active');
        $('html').toggleClass('lock');
    });
});

new Swiper('.site-slider', {
    pagination:
    {
        el: ".swiper-pagination",
        type: "progressbar",    
    },
    mousewheel: 
    {
        // Чувствительность
        sensitivity: 0.5,
    },
    speed: 800,
});