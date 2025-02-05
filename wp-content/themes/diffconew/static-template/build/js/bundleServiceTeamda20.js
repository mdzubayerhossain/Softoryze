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

(function () {

    $hiwBlock = $('.hiw');

    if ($hiwBlock.length) {

        $hiwBlock.find('.left .item').on('click mouseenter', function () {
           $hiwBlock.find('.left .item').removeClass('-active');
           $(this).addClass('-active');
            const index = $(this).index();
            $hiwBlock.find('.right .hiw__art').removeClass('-active');
            $hiwBlock.find('.right .hiw__art').eq(index).addClass('-active');
        });
    }

    $tStackBlock = $('.t-stack');

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

        $tStackBlock.find('.t-stack__item h4').on('click', function () {
            const $parent = $(this).parent();
            $tStackBlock.find('.t-stack__item').not($parent).removeClass('-active');
            $parent.toggleClass('-active');
        });

        $tStackBlock.find('.t-stack__all').on('click', function () {
            const $this = $(this);
            const isLess = $this.hasClass('-less');
            if (isLess) {
                $('.t-stack').find('.t-stack__item.-lm').addClass('-hm').removeClass('-lm');
                $this.removeClass('-less');
            } else {
                $('.t-stack').find('.t-stack__item.-hm').addClass('-lm').removeClass('-hm');
                $this.addClass('-less');
            }
        });
    }

    $faqBlock = $('.faq');

    if($faqBlock.length) {
        $faqBlock.find('.item').not('.-show-more').on('click', function () {
            const $this = $(this);
            const $parent = $this.parent();
            $parent.find('.item').not('.-show-more').not($this).removeClass('-active');
            $this.toggleClass('-active');
        });

        $faqBlock.find('.item.-show-more').on('click', function () {
            const $parent = $(this).parent();
            $parent.find('.item').not('.-show-more').removeClass('-hm');
            $(this).hide();
        });
    }

})();

