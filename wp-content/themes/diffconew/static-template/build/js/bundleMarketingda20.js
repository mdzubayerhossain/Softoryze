

/*
 * carousel-reviews.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2019 Diffco.us. All rights reserved.
 */

/*
* carousel-reviews
*/

(function(){
  var $slider = $('[data-carousel="achievements-reviews-v5"]');

  if ($slider.length) {
    $slider.owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      margin: 0,
      responsiveClass:true,
      navText: [
        '',
        ''
      ],
    responsive:{
        0: {
            items:1
        },
    }
    });
  }
})();

(function () {

    $hiwBlock = $('.g-hiw');

    if ($hiwBlock.length) {

        $hiwBlock.find('.left .item').on('click mouseenter', function () {
            $hiwBlock.find('.left .item').removeClass('-active');
            $(this).addClass('-active');
            const index = $(this).index();
            $hiwBlock.find('.right .g-hiw__art').removeClass('-active');
            $hiwBlock.find('.right .g-hiw__art').eq(index).addClass('-active');
        });
    }
})();



(function(){
    $tStackBlock = $('.g-t-stack');

    if ($tStackBlock.length) {
        $tStackBlock.find('.item.-show-more').on('click', function () {
            const $this = $(this);
            const $parent = $this.parent();
            const isLess = $this.hasClass('-less');
            if (isLess) {
                $parent.find('.item.-lm').not($this).addClass('-hm').removeClass('-lm');
                $(this).removeClass('-less');
            } else {
                $parent.find('.item.-hm').not($this).addClass('-lm').removeClass('-hm');
                $(this).addClass('-less');
            }
        });

        $tStackBlock.find('.g-t-stack__item h4').on('click', function () {
            const $parent = $(this).parent();
            $tStackBlock.find('.g-t-stack__item').not($parent).removeClass('-active');
            $parent.toggleClass('-active');
        });

        $tStackBlock.find('.g-t-stack__all').on('click', function () {
            const $this = $(this);
            const isLess = $this.hasClass('-less');
            if (isLess) {
                $tStackBlock.find('.g-t-stack__item.-lm').addClass('-hm').removeClass('-lm');
                $this.removeClass('-less');
            } else {
                $tStackBlock.find('.g-t-stack__item.-hm').addClass('-lm').removeClass('-hm');
                $this.addClass('-less');
            }
        });
    }

})();


(function(){
  var $slider = $('[data-carousel="stories-v5"]');

  if ($slider.length) {
    $slider.owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      margin: 0,
      responsiveClass:true,
      navText: [
        '',
        ''
      ],
      responsive:{
        0: {
            items:1
        },
      }
    });
  }

})();



(function(){
  var $slider = $('[data-carousel="g-team-slider"]');

  if ($slider.length) {
    $slider.owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      margin: 8,
      responsiveClass:true,
      navText: [
        '',
        ''
      ],
      responsive:{
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1280: {
          items: 5,
        }
      }
    });
  }
})();

