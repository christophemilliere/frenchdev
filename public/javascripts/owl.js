$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
    items: 1,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,

    //Autoplay
    autoPlay : true,
    stopOnHover : false,

    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
  });
 
});