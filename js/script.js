$('#css').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "23vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "12vw"
        })
    }
});
$('#html').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "21vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "12vw"
        })
    }
});
$('#js').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "15vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "12vw"
        })
    }
});
$('#bootstrap').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "18vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "12vw"
        })
    }
});
$('#autre').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "25vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "12vw"
        })
    }
});