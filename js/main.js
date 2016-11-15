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

    if ($(window).width() < 1001) {
        $('.hasSub > a').click(function(event){
            event.preventDefault();
            $(this).siblings('.sub-menu').slideToggle();
        });
      }

    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.btn-sidebar, .close-menu').on('click', function() {
        $('.header-menu').toggleClass('active');
        if ($('header').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    });

    $('.style_mobile li').click(function(){
        $(this).children('ul').slideToggle();
    });


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
                                  Accordion
    ---------------------------*/
    if ( $('#accordion').length > 0 ) {
        $('#accordion').accordion({
            heightStyle: "content",
            collapsible: true
        })
    }

    $('.js-toggle-accordion').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active')
        $(this).siblings('.js-accordion-container').slideToggle();
    });
      


    /*---------------------------
                                  Range slider (Price slider)
    ---------------------------*/
    $( ".range-slider" ).each(function(index, el) {
        var slider = $(this);
        slider.slider({
            range: true,
            min: slider.attr('data-min')*1,
            max: slider.attr('data-max')*1,
            values: [ slider.attr('data-start')*1, slider.attr('data-end')*1 ],
            step: slider.attr('data-step')*1,
            slide: function( event, ui ) {
                slider.siblings('.range-slider-top').find('.price-from').val( ui.values[ 0 ] );
                slider.siblings('.range-slider-top').find('.price-to').val( ui.values[ 1 ] );
            }
        });

        slider.siblings( '.range-slider-top' ).find( '.price-from' ).val( slider.slider( "values", 0 ) );
        slider.siblings( '.range-slider-top' ).find( '.price-to' ).val( slider.slider( "values", 1 ) );
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
        slidesPerRow: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesPerRow: 1,
                }
            },
        ]
    })

    $('.posts-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    })

    $('.partners-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.sale-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    })

    $('.sidebarSlider').slick();

    /*---------------------------
                                  Countdown
    ---------------------------*/
    if ( $('.block-countdown').length > 0 ) {
        $('.block-countdown').each(function(index, el) {
            var until = new Date($(this).attr('data-until'));
            $(this).countdown({
                until: until,
                format: 'dHMS',
                padZeroes: true
            });
        });
    }


    /*---------------------------
                                  Tabs
    ---------------------------*/
    $('.tabs').tabs({
        heightStyle: 'auto',
        activate: function( event, ui ) {
            ui.newPanel.find('.slick-slider').slick('setPosition');
        }
    })

    $('.product-submenu__small__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1
    });
    $('.product-submenu__big__slider').slick({
    });

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
                              Google map
    -------------------------*/
    var map;
    function googleMap_initialize() {
        var lat = $('#map_canvas').data('lat');
        var long = $('#map_canvas').data('lng');

        var mapCenterCoord = new google.maps.LatLng(lat, long);
        var mapMarkerCoord = new google.maps.LatLng(lat, long);


        var mapOptions = {
            center: mapCenterCoord,
            zoom: 8,
            //draggable: false,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        var markerImage = new google.maps.MarkerImage('images/location.png');
        var marker = new google.maps.Marker({
            icon: markerImage,
            position: mapMarkerCoord, 
            map: map,
            title:"Auro Architect"
        });
      
        $(window).resize(function (){
            map.setCenter(mapCenterCoord);
        });
    }

    if ( $('#map_canvas').length > 0) {
        googleMap_initialize();   
    }

}); // end file