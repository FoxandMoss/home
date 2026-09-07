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

  // Listen natively as well as through jQuery: browser hash jumps can finish
  // after the initial ready callback, and this keeps the floral layer in sync.
  function scheduleParallax() {
    window.requestAnimationFrame(updateParallax);
  }

  window.addEventListener('scroll', scheduleParallax, { passive: true });
  document.addEventListener('scroll', scheduleParallax, { passive: true });
  window.addEventListener('resize', scheduleParallax);
  $(window).on('hashchange', function () {
    showRegion();
    scheduleParallax();
  });
  $(function () {
    updateParallax();
    showRegion();
    scheduleParallax();
  });
})(jQuery);
