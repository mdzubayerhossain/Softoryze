/*
 * carousel-case-fola.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2020 Diffco.us. All rights reserved.
 */

(function(){
    var $slider = $('[data-carousel="case-fola"]');

    if ($slider.length) {
        $slider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="df-arrow-left"></i>',
                '<i class="df-arrow-right"></i>'
            ],
            responsive:{
                0:{
                    items:2,
                    center: true,
                },
                767:{
                    items:4
                },

            }
        });
    }
})();
