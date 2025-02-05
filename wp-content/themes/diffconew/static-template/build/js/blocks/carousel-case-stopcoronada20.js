/*
 * carousel-case-stopcorona.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2019 Diffco.us. All rights reserved.
 */

(function(){
    var $slider = $('[data-carousel="case-stopcorona"]'),
        isMobile = !!(navigator.userAgent.match(/iPhone|iPod|iPad|iOS|android/i))
    ;

    function viewCarousel() {
      if (window.matchMedia("(max-width: 767px)").matches) {
        if (!$slider.is('.owl-loaded')) {
          $slider.owlCarousel({
            nav: true,
            dots: false,
            loop: true,
            autoWidth:false,
            responsiveClass:true,
            margin: 0,
            items: 1,
            smartSpeed: 700
          });
        }

      } else {
        if ($slider.is('.owl-loaded')) {
          $slider.trigger('destroy.owl.carousel');
        }
      }
    }

    viewCarousel();

    if (isMobile) {
      window.addEventListener("orientationchange", viewCarousel, false);
    } else {
      $(window).resize(viewCarousel);
    }
})();
