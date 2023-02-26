$(".serious").click(function(){
    $('html, body').animate({
        scrollTop: $(".mySkills").offset().top
    }, 500);
});

$(".contact").click(function(){
    $('html, body').animate({
        scrollTop: $(".getIntouch").offset().top
    }, 500);
});