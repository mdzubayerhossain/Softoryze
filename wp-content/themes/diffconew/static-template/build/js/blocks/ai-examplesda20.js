(function () {
  $("section.ai-examples .business-categories li").on("click", function () {
    $("section.ai-examples .business-categories li").removeClass("active");
    $(this).addClass("active");
    const dataFor = $(this).data("for");
    $("section.ai-examples .right-inner").hide();
    $(`section.ai-examples .right-inner.${dataFor}`).show();
  });
  $("section.ai-examples .mobile-business-categories-select").on(
    "change",
    function (event) {
      const dataFor = event.target.value;
      $(`section.ai-examples .right`).animate({ scrollLeft: 0 }, 200);
      $("section.ai-examples .right-inner").removeClass("active");
      $(`section.ai-examples .right-inner.${dataFor}`).addClass("active");
    }
  );
})();
