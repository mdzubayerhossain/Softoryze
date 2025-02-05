/*
 * carousel-landingS3.js
 * diffco-site-template
 *
 * Created by Diffco.us
 * Copyright © 2020 Diffco.us. All rights reserved.
 */

(function () {

    function toggleText() {

        var button = $('a.button.toggleText');

        var minText = $('p.minText');

        var maxText = $('p.maxText');

        console.log(button);

        button.css({'display': 'none'});

        minText.css({'display': 'none'});

        maxText.css({'display': 'block'});
    }

    window.toggleText = toggleText;

    function showMore(block) {

        var el = $(block);

        var items = el.find('.items').find('.item.-hm');

        var elems2 = [];

        if (items.length > 0) {

            elems2.push([].shift.call(items));

        }

        if (items.length > 0) {

            elems2.push([].shift.call(items));

        }

        $(elems2).removeClass('-hm');

        $(elems2).addClass('-active');

        if (items.length === 0) {

            el.find('.more').addClass('-hidden');
            el.find('.less').removeClass('-hidden');

        }

    }

    window.showMore = showMore;

    function showLess(block) {

        var el = $(block);

        var items = el.find('.items').find('.item');

        if (items.length > 0) {

            [].shift.call(items);

        }

        if (items.length > 0) {

            [].shift.call(items);

        }

        if (items.length > 0 && block !== '.section6') {

            [].shift.call(items);

        }

        scrollToBlock(block);

        setTimeout(function () {

            $(items).removeClass('-active');

            $(items).addClass('-hm');

            el.find('.more').removeClass('-hidden');
            el.find('.less').addClass('-hidden');

        }, 500)

    }

    window.showLess = showLess;

})();






