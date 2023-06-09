$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });
   
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active')
    });
    // Text animations scripts
    var typed = new Typed(".text-animation",{
        strings:["Developer","Designer","Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".text-animation-2",{
        strings:["Developer","Designer","Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});