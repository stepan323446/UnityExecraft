$(function(){
    $('.burger').click(function(e){
        $('.burger').toggleClass('active');
        $('.burger-panel').toggleClass('active');
        $('html').toggleClass('lock');
    });

    $('#check-yes').click(function(e){
        if($('#check-yes').is(':checked'))
        {
            $('#btn-submit').removeClass('disable');
        }
        else
        {
            $('#btn-submit').addClass('disable');
        }
    });
    $('#btn-submit').click(function(e){
        if($('#check-yes').is(':checked'))
        {
            
        }
        else
        {
            e.preventDefault();
            $('#mini-form').addClass('warn-non-press');
            
        }
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