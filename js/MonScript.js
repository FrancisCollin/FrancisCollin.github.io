$(function(){

    var mousein=
        function(){
            $(this).css("opacity", "0").addClass("over")
                .animate({height: "100%", width: "100%", opacity: "1"});
        };

    var mouseout=
        function(){
            $(this).removeClass("over")
                .animate({height: "80%", width: "80%", opacity: "1"});
        };

        $(".rel").children().hover(mousein,mouseout);
        $(".rel").children().click(mouseout);
});

function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}

var clickPromo = false;


    $('#promo1, #promo2, #promo3, #promo4, #promo5, #promo6').hover(function () {
        if (clickPromo != true)
        {
        $(this).css('cursor', 'pointer');
        }
    });


    $("#promo1").click(function () {
        if (clickPromo != true)
        {
        $("h2").text("50% - a4h67jg");
        clickPromo = true;
        }
    });

$("#promo2").click(function () {
    if (clickPromo != true)
    {
        $("h2").text("40% - h57dkh");
        clickPromo = true;
    }
});

$("#promo3").click(function () {
    if (clickPromo != true)
    {
        $("h2").text("10% - 86hj4z");
        clickPromo = true;
    }
});

$("#promo4").click(function () {
    if (clickPromo != true)
    {
        $("h2").text("70% - 8jd63p");
        clickPromo = true;
    }
});

$("#promo5").click(function () {
    if (clickPromo != true)
    {
        $("h2").text("20% - u6te4r");
        clickPromo = true;
    }
});

$("#promo6").click(function () {
    if (clickPromo != true)
    {
        $("h2").text("35% - o7o6ry");
        clickPromo = true;
    }
});