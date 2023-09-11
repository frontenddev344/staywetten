
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



