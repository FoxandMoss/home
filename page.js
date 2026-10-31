(function () {
  var framePending = false;

  function hideUnpublishedNavigation() {
    document.querySelectorAll('.main-menu a').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (href.indexOf('wordleaf/') !== -1 || href.indexOf('nalia/') !== -1 || href.indexOf('storage-guard') !== -1) {
        var item = link.closest('li');
        if (item) item.hidden = true;
      }
    });
  }

  function updateArtworkPosition() {
    framePending = false;
    var scroller = document.scrollingElement || document.documentElement;
    var maximumScroll = Math.max(scroller.scrollHeight - scroller.clientHeight, 0);
    var progress = maximumScroll > 0
      ? Math.min(Math.max(scroller.scrollTop / maximumScroll, 0), 1)
      : 0;
    document.documentElement.style.setProperty("--artwork-y", (progress * 100).toFixed(4) + "%");
  }

  function scheduleArtworkPosition() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateArtworkPosition);
  }

  window.addEventListener("scroll", scheduleArtworkPosition, { passive: true });
  window.addEventListener("resize", scheduleArtworkPosition);
  document.addEventListener("toggle", scheduleArtworkPosition, true);

  if ("ResizeObserver" in window) {
    var resizeObserver = new ResizeObserver(scheduleArtworkPosition);
    resizeObserver.observe(document.body);
  }

  function initializePage() {
    hideUnpublishedNavigation();
    scheduleArtworkPosition();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePage);
  } else {
    initializePage();
  }
})();
