// Changes opacity of nav on scroll
$(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
});

// back to top button

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $(".btt-btn").fadeIn();
    } else {
    $(".btt-btn").fadeOut();
    }
});
$(".btt-btn").click(function (e) {
    window.scrollTo(0, 0);
});

// Auto Generate Copyright year script

$("#copyright").text(new Date().getFullYear());

// animation initializer

AOS.init();
