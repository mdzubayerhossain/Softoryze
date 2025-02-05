(function () {
  var windowSizeTriggered = 0;

  $(window).resize(triggerSizeConditions);
  $(document).ready(triggerSizeConditions);

  function triggerSizeConditions() {
    var windowWidth = $(window).width();

    if (windowWidth < 650 && windowSizeTriggered !== 1) {
      windowSizeTriggered = 1;
      mapSectionItems('.tech-details', '.tech-details__item', 3);
      mapSectionItems('.tech-stack', '.tech-stack__item', 3);
      mapSectionItems('.achievements3', '.item', 3);
    }

    if (windowWidth >= 650 && windowSizeTriggered !== 2) {
      windowSizeTriggered = 2;
      mapSectionItems('.tech-details', '.tech-details__item', 9);
      mapSectionItems('.tech-stack', '.tech-stack__item', 9);
      mapSectionItems('.achievements3', '.item', 9);
    }
  }

  function mapSectionItems(section, item, threshold) {
    $(section)
      .find('.more')
      .removeClass('-hidden');

    $(section)
      .find(item)
      .map(function(index) {
        return index < threshold
          ? $(this).removeClass('-hm')
          : $(this).addClass('-hm');
      });
  }

  function showMore(block, list, item) {
    var el = $(block);
    var items = el.find(list).find(`${item}.-hm`);

    items.removeClass('-hm');
    items.addClass('-active');

    el.find('.more').addClass('-hidden');
    el.find('.less').removeClass('-hidden');
  }

  window.showMore = showMore;

})();
