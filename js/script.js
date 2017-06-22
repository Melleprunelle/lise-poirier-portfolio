//CAT
$('.cat').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            margin: "-5px auto 0",
            "transition": "0.5s"
        })
    } else {
        $(this).css({
            margin: "200px auto 0",
            "transition": "0.5s"
        })
    }
});

//affichage projet
$(document).ready(function () {
    $('#button-plus').click(function () {
        var button=this
        $('#projet-2').slideToggle(500, function () {
            if ($('#projet-2').is(':visible')) {
                $("span", button).text("-");
            } else {
                $("span", button).text("+");
            }
        });
    });
});



