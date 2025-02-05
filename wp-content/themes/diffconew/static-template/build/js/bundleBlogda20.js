/*
 * bundleBlog.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2020 Diffco.us. All rights reserved.
 */

/*
 * subscribe.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2019 Diffco.us. All rights reserved.
 */

(function () {
  var $body = $("body"),
    $page = $(".page"),
    $subscribeFixed = $('.-fixed[data-block="subscribe"]'),
    $subscribeBottom = $('[data-block="subscribe"]:first');
  $body.on("click", '[data-target="close-subscribe"]', function (event) {
    $(this).parent().remove();
    event.preventDefault();
  });

  if ($subscribeFixed.length && $subscribeBottom.length) {
    function fixBottom() {
      var pageScrollHeight = $page[0].scrollHeight,
        offsetBottom =
          $body[0].clientHeight +
          (pageScrollHeight - $subscribeBottom.offset().top);
      if (pageScrollHeight - $(window).scrollTop() > offsetBottom) {
        $subscribeFixed.removeClass("-hide");
      } else {
        $subscribeFixed.addClass("-hide");
      }
    }

    fixBottom();

    $(window).scroll(fixBottom);
  }

  $('[data-target="close-subscribe-send"]').on("click", function (event) {
    event.preventDefault();

    var $subscribeBox = $(this).closest('[data-block="subscribe"]');
    $subscribeBox.removeClass("-send");
    const inputs = $subscribeBox.find(".subscribe__field input");
    if (inputs[0]) {
      inputs[0].value = "";
    }
  });
})();


