(function ($) {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // The illustration is deliberately anchored to the page's scroll progress:
  // top content reveals its top edge, the midpoint shows its center, and the
  // final content aligns with its bottom edge.
  function updateArtworkPosition() {
    var maximumScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    var progress = Math.min(Math.max(window.scrollY / maximumScroll, 0), 1);
    var position = reduceMotion.matches ? 50 : progress * 100;
    document.documentElement.style.setProperty("--artwork-y", position + "%");
  }

  function showRegion() {
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass('active');
  }

  function scheduleArtworkPosition() {
    window.requestAnimationFrame(updateArtworkPosition);
  }

  window.addEventListener('scroll', scheduleArtworkPosition, { passive: true });
  document.addEventListener('scroll', scheduleArtworkPosition, { passive: true });
  window.addEventListener('resize', scheduleArtworkPosition);
  $(window).on('hashchange', function () {
    showRegion();
    scheduleArtworkPosition();
  });
  $(function () {
    showRegion();
    scheduleArtworkPosition();
  });
})(jQuery);
