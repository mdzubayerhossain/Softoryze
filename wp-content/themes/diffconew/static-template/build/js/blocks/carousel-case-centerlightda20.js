var moduleCaseCenterlight = {
    cacheDom: function () {
        this.$slider = $(".owl-carousel")
    },
    sliderInit: function () {
        this.$slider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="arrow-left"></i>',
                '<i class="arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    singleItem: true
                },
                767: {
                    items: 1,
                    singleItem: true
                },

            }
        });
    },
    init: function () {

        this.cacheDom();
        this.sliderInit();

    }
};

if ($('.caseCenterlight').length > 0) {

    moduleCaseCenterlight.init();

}

// module Header END
