(function ($) {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // The background stays viewport-sized while this small offset gives it depth.
  function updateParallax() {
    var offset = reduceMotion.matches ? 0 : Math.max(window.scrollY * -0.09, -52);
    document.documentElement.style.setProperty("--parallax-y", offset + "px");
  }

  function showRegion() {
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass('active');
  }

  $(window).on('scroll resize', updateParallax);
  $(window).on('hashchange', showRegion);
  $(function () {
    updateParallax();
    showRegion();
  });
})(jQuery);
