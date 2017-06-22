//REFRESH PAGE
$('#refresh').on('click', function () {
    location.reload();
});

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

//Scroll fluid pour l'ancre
$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});