
// 
jQuery(document).ready(function () {
    jQuery(".menu-toggle").click(function () {
        jQuery("body").addClass("toggle");
    });
});


jQuery(document).ready(function () {
    jQuery(".closed-menu").click(function () {
        jQuery("body").removeClass("toggle");
    });
});
// 

$(document).ready(function () {
    $(window).scroll(function () {
        var header = $("header");
        header.toggleClass("sticky", $(window).scrollTop() > 0);
    });
});








$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            loop: true
        }
    }
})



