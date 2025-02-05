/*
 * bundleClients.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2020 Diffco.us. All rights reserved.
 */

/*
 * clients.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2019 Diffco.us. All rights reserved.
 */

(function(){

  // Screen resize watcher
  var windowSizeTriggered = 0;

  $(window).resize(triggerSizeConditions);
  $(document).ready(triggerSizeConditions);

  function triggerSizeConditions() {
    var windowWidth = $(window).width();

    if (windowWidth < 650 && windowSizeTriggered !== 1) {
      windowSizeTriggered = 1;
      mapSectionItems('.clients', 10);
    }

    // if (windowWidth >= 650 && windowSizeTriggered !== 2) {
    //   windowSizeTriggered = 2;
    //   mapSectionItems('.section9', 9);
    // }
  }

  function mapSectionItems(section, threshold) {
    $(section)
      .find('.more')
      .removeClass('-hidden');

    $(section)
      .find('.clients__item')
      .map(function(index) {
        return index < threshold
          ? $(this).removeClass('-hm')
          : $(this).addClass('-hm');
      });
  }

  // Show more button in Clients list
  function showMore(section) {
    var $section = $(section);
    var $items = $section.find('.clients__list').find('.clients__item.-hm');

    $items.removeClass('-hm');
    $section.find('.more').addClass('-hidden');

    // if ($items.length) {
    //   $items.slice(0, 10).removeClass('-hm');
    // }
    //
    // if ($items.length < 10) {
    //   $section.find('.more').addClass('-hidden');
    // }
  }

  window.showMore = showMore;



  // Section 1 - Move icons on scroll
  // let line1 = document.querySelector(".line-1");
  // let line2 = document.querySelector(".line-2");
  // let line3 = document.querySelector(".line-3");
  // let line4 = document.querySelector(".line-4");
  // let scrollDirection = window.scrollY;
  //
  // line1.style.backgroundPositionX = '0px';
  // line2.style.backgroundPositionX = '0px';
  // line3.style.backgroundPositionX = '70px';
  // line4.style.backgroundPositionX = '70px';
  //
  // window.addEventListener("scroll", function(e) {
  //   let current = window.scrollY;
  //
  //   if (current < 600) {
  //     var x = current / 100;
  //
  //     var l1 = parseFloat(line1.style.backgroundPositionX);
  //     var l2 = parseFloat(line2.style.backgroundPositionX);
  //     var l3 = parseFloat(line3.style.backgroundPositionX);
  //     var l4 = parseFloat(line4.style.backgroundPositionX);
  //
  //     if (scrollDirection < current) {
  //       line1.style.backgroundPositionX = l1 + x + 'px';
  //       line2.style.backgroundPositionX = l2 - x + 'px';
  //       line3.style.backgroundPositionX = l3 + x + 'px';
  //       line4.style.backgroundPositionX = l4 - x + 'px';
  //       scrollDirection = current;
  //
  //     } else {
  //       line1.style.backgroundPositionX = l1 - x + 'px';
  //       line2.style.backgroundPositionX = l2 + x + 'px';
  //       line3.style.backgroundPositionX = l3 - x + 'px';
  //       line4.style.backgroundPositionX = l4 + x + 'px';
  //       scrollDirection = current;
  //     }
  //   }
  // });

  var isMobile = !!(navigator.userAgent.match(/iPhone|iPod|iPad|iOS|android/i));
  var $box = $('[data-clients]');
  var $list = $box.find('[data-clients-list]');
  var boxDetailed = document.getElementById('clientsDetailed');
  var boxDetailedBody = $(boxDetailed).find('[data-clients-detailed-body]');
  var $items = $box.find('[data-clients-item]');
  var counterInLine = 0;
  var elementInLine = 0;
  var isDekstopWidth;
  var isMobileWidth;

  $box.on('click', '[data-clients-item]', function(event) {
    var $link = $(this),
        positon = +$link[0].dataset.position,
        skipElement,
        currentElement = $link,
        content = $link.find('[data-clients-detailed-body]').html()
    ;

    if (!$link.is('.-active')) {
      // if (isMobileWidth) {
      //   hide();
      //   $link.addClass('-active');
      //   boxDetailedBody.html(content);
      //   $($list[0].insertBefore(boxDetailed, $link[0].nextSibling)).show('slow');
      //
      // } else {
        skipElement = elementInLine - positon;

        for (var i = 0; i < skipElement; i++) {
          if (currentElement.next().length && !currentElement.next().is('.clients-detailed')) {
            currentElement = currentElement.next();
          }
        }

        if (currentElement.next().is('.clients-detailed.-open')) {
          $link.addClass('-active').siblings().removeClass('-active');
          boxDetailedBody.html(content);

        } else {
          hide();
          $link.addClass('-active');
          boxDetailedBody.html(content);
          $($list[0].insertBefore(boxDetailed, currentElement[0].nextSibling)).show('slow');
        }
      // }

      boxDetailed.classList.add('-open');

    } else {
      hide('fast');
    }

    event.preventDefault();
  });

  $box.on('click', '[data-target="close"]', function(event) {
    hide('fast');
    event.preventDefault();
  });

  function hide(animation){
    boxDetailed.classList.remove('-open');
    $items.removeClass('-active');
    $(boxDetailed).hide(animation);
  }

  function init() {
    isMobileWidth = window.matchMedia("(max-width: 767px)").matches;
    isDekstopWidth = window.matchMedia("(min-width: 1280px)").matches;

    counterInLine = 0;
    elementInLine = isDekstopWidth ? 5 : isMobileWidth ? 2 : 3;

    hide();
    $box[0].insertBefore(boxDetailed, $list[0]);

    $items.each(function(index) {
      if (Number.isInteger(index/elementInLine)) {
        counterInLine = 1;
      } else {
        counterInLine = counterInLine + 1;
      }

      $(this).attr('data-position', counterInLine);
    });
  }

  if ($box.length) {
    init();

    if (isMobile) {
      window.addEventListener("orientationchange", function() {
        init();
      }, false);
    } else {
      $(window).resize(init);
    }
  }

  function countUp() {
    $('.count').each(function () {
      $(this).prop('Counter', 0).animate(
        {
          Counter: $(this).text()
        },
        {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
        });
    });
  }

  var bAnimate = true;

  function countUpCheckView() {
    var counters = $(".count");
    var scrolling = $(this).scrollTop();
    var divoffset = counters.offset().top;
    var screenBottom = scrolling + $(window).height();
    var elemBottom = divoffset + counters.outerHeight();

    if (screenBottom > elemBottom) {
      if (bAnimate) {
        counters.parent().css("opacity", "1.0");
        countUp();
        bAnimate = false;
      }
    }
  }

  $(function () {
    countUpCheckView();

    $(window).scroll(function () {
      countUpCheckView();
    })
  });


  const sectionClients = $('.clients');
  const shine = $('.clients .shine');

  //on mouse move only one sectionClients move shine element to cursor position
  sectionClients.on('mousemove', function (e) {
    shine.addClass('-show');

    shine.css({
      'left': e.pageX - 330,
      'top': e.pageY - 380
    });

  });

  // on mouse leave shine element hide
  sectionClients.on('mouseleave', function () {
      shine.removeClass('-show');
  });



})();

