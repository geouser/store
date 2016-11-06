// Global parameters
window.params = {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};


jQuery(document).ready(function($) {

    /*---------------------------
                                  ADD CLASS ON SCROLL
    ---------------------------*/
    $(function() { 
        var $element = $('.site-header'),
            className = 'scrolled';

        $(window).on('load resize scroll', function(event) {
            event.preventDefault();
            $element.toggleClass('prepare', $(window).scrollTop() >= 120);
            $element.toggleClass(className, $(window).scrollTop() >= 160);
        });
    });

    $('li:has(ul)').addClass('hasSub');

    /*---------------------------
                                  Toggle search-bar
    ---------------------------*/
    $('.js-search-toggle').on('click', function(event) {
        event.preventDefault();
        $('.search-bar').toggleClass('active');
    });


    /*---------------------------
                                  Add margin-top to second section
    ---------------------------*/
    $(window).on('load resize', function(event) {
        event.preventDefault();
        $('.products-grid').css('margin-top', $(this).height());
    });
      


    /*---------------------------
                                  Sliders
    ---------------------------*/
    $('.offer-slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    })

    $('.products-slider').slick({
        dots: false,
        arrows: true,
        rows: 2,
        slidesPerRow: 4
    })



    /*---------------------------
                                  Tabs
    ---------------------------*/
    $('.tabs').tabs({
        heightStyle: 'auto',
        activate: function( event, ui ) {
            ui.newPanel.find('.slick-slider').slick('setPosition');
        }
    })



    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.menu-button').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('header').toggleClass('active');
        if ($('header').hasClass('active')) {
                $('body, html').css('overflow', 'hidden');
            } else {
                $('body, html').css('overflow', 'visible');
            }
    });



    /*---------------------------
                                  Magnific popup
    ---------------------------*/
    $('.magnific').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',
        modal: false,

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });



    /*----------------------------
                              SEND FORM
    -------------------------*/
    /**
     *
     * Open popup
     *
     * @param popup {String} jQuery object (#popup)
     *
     * @return n/a
     *
    */
    function openPopup(popup){
        $.magnificPopup.open({
            items: {
              src: popup
            },
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            modal: false,
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        }, 0);
    }

    $('form').on('submit', function(event) {
        event.preventDefault();
        /* Act on the event */
        var data = $(this).serialize();
        $.ajax({
            url: theme.url + '/forms.php',
            type: 'POST',
            data: data,
            success: function(result){
                if (result.status == 'ok') {
                    openPopup('#modal-popup-ok')
                } else {
                    openPopup('#modal-popup-error')
                }
            },
            error: function(result) {
                openPopup('#modal-popup-error');
            }
        })
        .always(function() {
            $('form').each(function(index, el) {
                $(this)[0].reset();
            });
        });
        
    });

}); // end file