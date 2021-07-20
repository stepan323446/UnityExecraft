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

    /* ДропБокс */
    $('.selected').click(function(e)
    {
        let dropdown = $(e.target).parent('.dropdown');
        $(dropdown).toggleClass('clicked');
    });
    $('.selecters .item').click(function(e)
    {
        let dropdown = $(e.target).parent().parent();

        $(dropdown).removeClass('clicked');
        
        let text = $(e.target).children('.item-text').text();
        let hrefImage = $(e.target).children('.item-img').children().attr('src');

        let selected = $(dropdown).children('.selected');
        $(selected).children('.item-text').text(text);
        $(selected).children('.item-img').children().attr('src', hrefImage);

        $(dropdown).attr('choosen', $(e.target).attr('index'));
        calcValue();
    });

    let massiveVal = [
        new Value(19,   1,     20,  1),
        new Value(1,    1,     1,   1),
        new Value(2,    1,     3,   1),
        new Value(1,    2,     0,   1)
    ];
    $('#you-not-bravler').click(function(e)
    {
        calcValue();
    });

    function calcValue()
    {
        let value = $('#input-value').val();
        let valfisrt = massiveVal[$('#first-drop').attr('choosen')];
        let valsecond = massiveVal[$('#second-drop').attr('choosen')];

        if(valfisrt == valsecond)
        {
            $('#result').text(value);
            $('#ostatoc').text('Остаток: 0 ГК');
            return;
        }
        if($('#second-drop').attr('choosen') == 3)
        {
            $('#result').text("Нет конвертации");
            $('#ostatoc').text('Остаток: 0 ГК');
            return;
        }
        let br = 1;
        if($('#you-not-bravler').is(':checked'))
        {
            br = 2;
        }

        let valf = valfisrt.getGoldcoins * value / valfisrt.getGoldcoins_n;
        let vals = valsecond.payGoldcoins / valsecond.payGoldcoins_n * br;

        let unresult = valf / vals;

        $('#ostatoc').text('Остаток: 0 ГК');
        
        if((unresult % 1) != 0)
        {
            $('#ostatoc').text(`Остаток: ${valf % vals} ГК`);
            if($('#first-drop').attr('choosen') == '3')
            {
                $('#ostatoc').text(`Остаток: ${valf % vals * 2} Жел. слиток`);
            }
        }

        let result = Math.trunc(unresult);

        $('#result').text(result);
    }
    
    function Value(get, get_n, pay, pay_n)
    {
        this.getGoldcoins = get;
        this.getGoldcoins_n = get_n;
        this.payGoldcoins = pay;
        this.payGoldcoins_n = pay_n;
    }
    $('#input-value').on("change keyup paste", function(e)
    {
        calcValue();
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