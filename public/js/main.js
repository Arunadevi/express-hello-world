$(document).ready(function(){
    $('.slider-for.portfolio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery.portfolio'
    });
    $('.gallery.portfolio').slick({
        adaptiveHeight: true,
        respondTo: 'slider',
        slidesToScroll: 1,
        slidesToShow: 3,
        asNavFor: '.slider-for.portfolio',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    

    $('.slider-for.birds').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery.birds'
    });
    $('.gallery.birds').slick({
        adaptiveHeight: true,
        respondTo: 'slider',
        slidesToScroll: 1,
        slidesToShow: 3,
        asNavFor: '.slider-for.birds',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    loadBlogs();
});
