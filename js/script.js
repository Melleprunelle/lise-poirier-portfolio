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