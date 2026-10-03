(function ($) {
  var framePending = false;

  // Map page scroll progress directly to artwork progress.
  // Page top = artwork top. Page bottom = artwork bottom.
  // The artwork's scale is fixed in CSS, so scrolling only moves it vertically.
  function updateArtworkPosition() {
    framePending = false;

    var scroller = document.scrollingElement || document.documentElement;
    var maximumScroll = Math.max(scroller.scrollHeight - scroller.clientHeight, 0);
    var progress = maximumScroll > 0
      ? Math.min(Math.max(scroller.scrollTop / maximumScroll, 0), 1)
      : 0;

    document.documentElement.style.setProperty(
      "--artwork-y",
      (progress * 100).toFixed(4) + "%"
    );
  }

  function showRegion() {
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass('active');
  }

  function scheduleArtworkPosition() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateArtworkPosition);
  }

  window.addEventListener('scroll', scheduleArtworkPosition, { passive: true });
  window.addEventListener('resize', scheduleArtworkPosition);

  // Opening FAQ/disclosure rows changes the page length, so recalculate the
  // progress mapping immediately instead of waiting for the next scroll event.
  document.addEventListener('toggle', scheduleArtworkPosition, true);

  if ('ResizeObserver' in window) {
    var resizeObserver = new ResizeObserver(scheduleArtworkPosition);
    resizeObserver.observe(document.body);
  }

  $(window).on('hashchange', function () {
    showRegion();
    scheduleArtworkPosition();
  });

  $(function () {
    showRegion();
    scheduleArtworkPosition();
  });
})(jQuery);
