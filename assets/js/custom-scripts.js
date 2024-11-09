$(document).ready(function() {
    'use strict';

    //===== Poratfolio Style 3 =====*/
    if ($('.port-box3').length > 0) {
        $('.port-box3').on('mousemove', function(e) {
            $('.port-sticky-info').offset({
                left: e.pageX + 2,
                top: e.pageY + 2
            });
        });
    }

    //===== Width =====//
    var width = window.innerWidth;

    //===== Active Class =====//
    $(window).on('hashchange', function() {
        let hash = window.location.hash;
        $('.one-page-nav li a').parent('li').removeClass('active');
        $('.one-page-nav li a[href=\"' + hash + '\"]').parent('li').addClass('active');
    });

    //===== Menu Dropdown =====//
    $(".menu-btn").on("click", function() {
        $(".menu-wrap").addClass("active");
        return false;
    });

    $(".menu-cls-btn").on("click", function() {
        $(".menu-wrap").removeClass("active");
        return false;
    });

    //===== Header Search =====//
    $('.search-btn').on('click', function() {
        $('.search-wrap').addClass('active');
        return false;
    });
    $('.search-cls-btn').on('click', function() {
        $('.search-wrap').removeClass('active');
        return false;
    });

    //===== Wow Animation Setting =====//
    if ($(".wow").length > 0) {
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: true, // default
            live: true // default
        });

        wow.init();
    }

    //===== Responsive Header =====//
    $('.rspn-mnu-btn').on('click', function() {
        $('.rsnp-mnu').addClass('slidein');
        return false;
    });
    $('.rspn-mnu-cls').on('click', function() {
        $('.rsnp-mnu').removeClass('slidein');
        return false;
    });
    $('.menu-wrap li.menu-item-has-children > a').on('click', function() {
        $(this).parent().siblings('li').children('ul').slideUp();
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().children('ul').slideToggle();
        $(this).parent().toggleClass('active');
        return false;
    });

    //===== Scrollbar =====//
    if ($('.menu-wrap > ul').length > 0) {
        var ps = new PerfectScrollbar('.menu-wrap > ul');
    }

    //===== Select =====//
    if ($('.lang-slct > select, .slc-wp > select').length > 0) {
        $('.lang-slct > select, .slc-wp > select').selectpicker();
    }

    //===== Sticky Sidebar =====//
    if (width > 800) {
        if ($('.port-detail-wrap > div.row > div, .blog-detail-wrap > div.row > div').length > 0) {
            $('.port-detail-wrap > div.row > div, .blog-detail-wrap > div.row > div').theiaStickySidebar({
                additionalMarginTop: 60,
                additionalMarginBottom: 60
            });
        }
    }

    //===== Scroll Function =====//
    if ($.isFunction($.fn.onePageNav)) {
        $('.one-page-nav, .one-page-nav2').onePageNav();
    }

    //===== Counter Up =====//
    if ($.isFunction($.fn.counterUp)) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    //===== Count Down =====//
    if ($.isFunction($.fn.downCount)) {
        $('.countdown').downCount({
            date: '12/3/2021 12:00:00',
            offset: +5
        });
    }

    //===== LightBox =====//
    if ($.isFunction($.fn.fancybox)) {
        $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
    }

    //===== Slick Carousel =====//
    if ($.isFunction($.fn.slick)) {

        //=== Team Carousel ===//
        $('.team-caro').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            asNavFor: '.team-nav-caro'
        });

        $('.team-nav-caro').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.team-caro',
            dots: false,
            arrows: false,
            centerPadding: '0',
            focusOnSelect: true,
            vertical: true,
            responsive: [{
                    breakpoint: 981,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        vertical: false
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        vertical: false
                    }
                }
            ]
        });

        //=== Team Carousel 2 ===//
        $('.team-caro2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 981,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

        //=== Testimonials Carousel ===//
        $('.testi-caro').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            fade: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 981,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        //=== Price Carousel ===//
        $('.price-caro').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: false,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 981,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        //=== Featured Area Carousel ===//
        $('.feat-caro').slick({
            arrows: false,
            initialSlide: 0,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            speed: 5000,
            draggable: true,
            dots: false,
            pauseOnDotsHover: true,
            pauseOnFocus: false,
            pauseOnHover: false
        });

        //=== Team Carousel 3 ===//
        $('.team-caro3').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 981,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

}); //===== Document Ready Ends =====//

jQuery(window).on('load', function() {
    'use strict';

    //===== Onpage Menu =====//
    var sec_height = $('#about').innerHeight();
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= sec_height) {
            $('.one-page-nav2').addClass('active');
        } else {
            $('.one-page-nav2').removeClass('active');
        }
    });

    //===== Popup Script =====//
    function delay() {
        $(".subscribe-popup-wrap").fadeIn();
    };
    window.setTimeout(delay, 3000);

    $(".popup-cls-btn").on("click", function() {
        $(this).parent().parent().parent().fadeOut();
    });

    //===== Header =====//
    var menu_height = $('header').innerHeight();
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= menu_height) {
            $('.sticky-header').addClass('active');
        } else {
            $('.sticky-header').removeClass('active');
        }
    });

    //===== Isotope =====//
    if (jQuery('.fltr-itm').length > 0) {
        if (jQuery().isotope) {
            var jQuerycontainer = jQuery('.masonry'); // cache container
            jQuerycontainer.isotope({
                itemSelector: '.fltr-itm',
                columnWidth: .1
            });
            jQuery('.fltr-btns a').on('click', function() {
                var selector = jQuery(this).attr('data-filter');
                jQuery('.fltr-btns li').removeClass('active');
                jQuery(this).parent().addClass('active');
                jQuerycontainer.isotope({
                    filter: selector
                });
                return false;
            });
            jQuerycontainer.isotope('layout'); // layout/layout
        }

        jQuery(window).resize(function() {
            if (jQuery().isotope) {
                jQuery('.masonry').isotope('layout'); // layout/relayout on window resize
            }
        });
    }
}); //===== Window onLoad Ends =====//
$(".open_package_model").click(function() {
    var e = $(this).attr("data-name"),
        t = $(this).attr("data-price"),
        a = $(this).attr("data-service"),
        o = $(this).attr("data-id");
    $(".popup_form .pkg_name").text(a), $(".popup_form .pkg_price").text(t), $(".popup_form #pkg_title").text(e), $("#get_pkg_data").val(o), $(".popup_package_model").modal("show")
})
$('.slider1').slick({
    rows: 2,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 'auto',
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                rows: 4,
                dots: false,
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slider2').slick({
    rows: 2,
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                rows: 4,
                dots: false,
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slider3').slick({
    rows: 2,
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                rows: 4,
                dots: false,
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slider4').slick({
    rows: 1,
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                rows: 2,
                dots: false,
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.portfolio-sec .nav-tabs li a').click(function() {
    $('.slider3, .slider2, .slider1').slick('resize');
})
$('.portlp-slide').on('beforeChange', function() {
    $('.lazy').Lazy();
});
$('.portlp-slide').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-right"></i></button>',
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }]
});
$('.trust-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }]
});
$('.aff_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,


    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                margin: 10
            },

        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 2,
                margin: 10
            },

        }

    ]
});
$(document).ready(function() {
    $(function() {
        $('.lazy').Lazy();
    });
})
$('.portfolio-slider').on('beforeChange', function() {
    $('.lazy').Lazy();
});
$('.portfolio-sec .nav-tabs li a').click(function() {
    $('.slider1').slick('refresh');
    $('.portlp-slide').slick('refresh');
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                arrows: false,
                vertical: false,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                vertical: false,
            }
        },

    ]
});
$(function() {
    var $anchors = $('.step-img-wrap figure');

    (function _loop(idx) {
        $anchors.removeClass('active').eq(idx).addClass('active');
        setTimeout(function() {
            _loop((idx + 1) % $anchors.length);
        }, 5000);
    }(0));
});
$(function() {
    var $anchors = $('.step-item');

    (function _loop(idx) {
        $anchors.removeClass('active').eq(idx).addClass('active');
        setTimeout(function() {
            _loop((idx + 1) % $anchors.length);
        }, 5000);
    }(0));
});
$(".step-item").on("click", function() {

    var dataId = $(this).data("step");

    $(this).addClass('active')

    $(this).siblings().removeClass('active')

    $('.step-img').parent('figure').removeClass('active').addClass('pastactive');

    $('.step-img[data-step=' + dataId + ']').parent('figure').addClass('active').removeClass('pastactive');

});
$(document).ready(function() {
    $("#preloader").remove();
})
$('.animation-3d-portfolio .item a').fancybox()