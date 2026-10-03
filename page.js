(function () {
  var framePending = false;

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleArtworkPosition);
  } else {
    scheduleArtworkPosition();
  }
})();
