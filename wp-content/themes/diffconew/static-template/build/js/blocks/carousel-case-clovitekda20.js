var moduleCaseClovitek = {
    cacheDom: function(){
        this.$slider = $('[data-carousel="case-clovitec"]')
    },
    sliderInit: function(){
        this.$slider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            items:1,
            navText: [
                '<i class="cases-arrow-left"></i>',
                '<i class="cases-arrow-right"></i>'
            ]
        });
    },
    init: function(){
        this.cacheDom();
        this.sliderInit();
    }
};

if($('body').width() < 768 && $('.caseClovitek').length > 0){
    moduleCaseClovitek.init();
}
