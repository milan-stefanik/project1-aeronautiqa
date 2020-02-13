//code copied from "https://stackoverflow.com/questions/55360887/navbar-not-functioning-like-its-supposed-to" and adjusted

$(function() {
    var nav = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });
});

//code copied from "https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html"
$(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
});
