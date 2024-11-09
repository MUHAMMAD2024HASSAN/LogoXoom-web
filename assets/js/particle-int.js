$(document).ready(function() {
    'use strict';
    var particlesID = '';
    var particlesColor = '#fff';
    var particlesSpeed = 2;
    var particlesSaturation = 200;
    var particlesSize = 10;
    var particlesCount = 8;
    var particlesHide = 770;

    var particlesImage1 = '';
    var particlesImage2 = '';
    var particlesImage3 = '';
    var particlesImage4 = '';

    jQuery('.particles-js').each(function(i, el) {

        particlesID = jQuery(el).attr('id');

        if (jQuery(el).data('hide') != undefined) {
            particlesHide = jQuery(el).data('hide');
        }

        if (jQuery(window).width() > particlesHide) {

            /* -----> Grab data attributes <----- */
            if (jQuery(el).data('color') != undefined) {
                particlesColor = jQuery(el).data('color');
            }
            if (jQuery(el).data('saturation') != undefined) {
                particlesSaturation = jQuery(el).data('saturation');
            }
            if (jQuery(el).data('speed') != undefined) {
                particlesSpeed = jQuery(el).data('speed');
            }
            if (jQuery(el).data('size') != undefined) {
                particlesSize = jQuery(el).data('size');
            }
            if (jQuery(el).data('count') != undefined) {
                particlesCount = jQuery(el).data('count');
            }
            if (jQuery(el).data('image') != undefined) {
                particlesImage1 = jQuery(el).data('image') + "/images/particle-1.svg";
                particlesImage2 = jQuery(el).data('image') + "/images/particle-2.svg";
                particlesImage3 = jQuery(el).data('image') + "/images/particle-3.svg";
                particlesImage4 = jQuery(el).data('image') + "/images/particle-4.svg";
            }

            /* -----> Particles Init <----- */
            var test = particlesJS(particlesID, {
                "particles": {
                    "number": {
                        "value": particlesCount,
                        "density": {
                            "enable": false,
                            "value_area": particlesSaturation
                        }
                    },
                    "color": {
                        "value": particlesColor
                    },
                    "shape": {
                        "type": ["image", "image2", "image3", "image4"],
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": particlesImage1,
                            "width": 83,
                            "height": 83
                        },
                        "image2": {
                            "src": particlesImage2,
                            "width": 83,
                            "height": 83
                        },
                        "image3": {
                            "src": particlesImage3,
                            "width": 83,
                            "height": 83
                        },
                        "image4": {
                            "src": particlesImage4,
                            "width": 83,
                            "height": 83
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 0.2,
                            "opacity_min": 0.5,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": particlesSize,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "size_min": particlesSize * 0.7,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#000000",
                        "opacity": 1,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": particlesSpeed,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "bounce",
                        "attract": {
                            "enable": false,
                            "rotateX": 0,
                            "rotateY": 0
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 100,
                            "line_linked": {
                                "opacity": .7
                            }
                        },
                        "bubble": {
                            "distance": 250,
                            "size": particlesSize * 1.5,
                            "duration": 2,
                            "opacity": 1,
                            "speed": 1.5
                        },
                        "repulse": {
                            "distance": 100
                        },
                        "push": {
                            "particles_nb": 1
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
            });

        }

    });

}); //===== Document Ready Ends =====//