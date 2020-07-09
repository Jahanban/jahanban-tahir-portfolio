// Smooth Scroll Jquery

$(document).ready(function () {

    const scrollLink = $('.scroll');

    //smooth scrolling

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500)
    });
})

// Haburger menu toggle

$(".menu-toggle-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav-links").toggleClass("active");
});