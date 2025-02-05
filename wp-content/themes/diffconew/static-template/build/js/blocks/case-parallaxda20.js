(function(){
  var $paralax = $('.js-case-parallax'),
      parallax = [];

  function setParalax() {
    if ($('body').width() > 1199 && $paralax.length) {
      if (!parallax.length) {
        $paralax.each(function() {
    			parallax.push(new Parallax($(this)[0]));
    		});
      }

    } else {
      if (parallax.length) {
        for (var i = 0; i < parallax.length; i++) {
          parallax[i].destroy();
        }

        parallax.length = 0;
      }
    }
  }

  if ($paralax.length) {

      setParalax();

      $(window).resize(function() {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
          setParalax();
        }, 300);
    });
  }

})();
