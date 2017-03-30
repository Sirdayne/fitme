$(document).ready(function(){
    /*
    $('body').on('click','.modal-back, .modal-close' , function(){
        $('.modal-back, .modal, .thx, .modal-calc').fadeOut(500);
    });
    
    $('body').on('click','.jk' , function(){
        $('.modal-back, .modal').fadeIn(500);
    });
    
    $('.work-box__left__circle, .work-box__right__circle').addClass('wow fadeInDown');
    $('.work-box__left__line, .work-box__right__line').addClass('wow aniline');
    
    $('.work-box__left .work-box__shadow, .work-box__left .work-box__title, .work-box__left .work-box__text').addClass('wow fadeInLeft');
    $('.work-box__right .work-box__shadow, .work-box__right .work-box__title, .work-box__right .work-box__text').addClass('wow fadeInRight');
    
    $('.service-part__text, .service-part__image').addClass('wow fadeInUp');
    $('.service-part__image').attr('data-wow-delay','.7s');
    */
    
    $('body').on('click','.burger' , function(){
        $(this).toggleClass('b-active');
        $('.navigations').toggleClass('navigations-active');
    });
    
    $('body').on('click','.js-cabinet' , function(){
        $('.modal-wrapper').addClass('js-active');
    });
    
    $('body').on('click','.modal-close' , function(){
        $('.modal-wrapper').removeClass('js-active');
    });
    
    //PARALLAX
    if ($(window).width() > 1000) {
        var scene = document.getElementById('main');
        var parallax = new Parallax(scene, {
            originX: 0.5,
            originY: 0.5
        });
    }
    //else{
        
    //}
    
    $('.section-about').waypoint({
        handler: function(direction) {

            if (direction === 'down') {
                $('.navigation').addClass('nav-fix').addClass('fadeInDown');
                
            }
            else{
                $('.navigation').removeClass('nav-fix').removeClass('fadeInDown');
            }

        },
        offset: 200
    });
    
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

    $('.js-want').click(function() {
        scrollToAnchor('an-call');
    });
    
    $(function () {
            if ($(window).width() > 991) {
                (function ($) {
                    var s = skrollr.init({
                        render: function (data) {}
                    });
                })(jQuery);
                $(window).on('resize', function () {
                    if ($(window).width() <= 974) {
                        $('.gnt-1').addClass('notrans');
                    }
                    else {
                        (function ($) {
                            var s = skrollr.init({
                                render: function (data) {}
                            });
                        })(jQuery);
                        $('.gnt-1').removeClass('notrans');
                    }
                });
            }

        });
    
         /* SLICK SLIDERS */

        $('#slick-slider-0').slick({
            centerMode: false,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
        });    

        $('.navigations').InPageNav({
            currentClass: 'nav-active',
            scrollSpeed: 1000,
            scrollOffset: 60,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
            begin: function() {
                },
            end: function() {
                //$('body').removeClass('menu-opened').addClass('menu-closed');
            },
            scrollChange: function($currentListItem) {
                    // Fired when you enter a section and pass the list item of the section
                }
        });
    
});

