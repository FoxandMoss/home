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

  function applyDownloadManifest(manifest) {
    document.querySelectorAll('[data-download-app][data-download-platform]').forEach(function (node) {
      var app = node.getAttribute('data-download-app');
      var platform = node.getAttribute('data-download-platform');
      var entry = manifest && manifest[app] && manifest[app][platform];
      if (!entry) return;

      var available = entry.status === 'available' && entry.url;
      var desiredTag = available ? 'A' : 'SPAN';
      var current = node;

      if (node.tagName !== desiredTag) {
        var replacement = document.createElement(desiredTag.toLowerCase());
        Array.from(node.attributes).forEach(function (attr) {
          if (attr.name !== 'href') replacement.setAttribute(attr.name, attr.value);
        });
        replacement.innerHTML = node.innerHTML;
        node.replaceWith(replacement);
        current = replacement;
      }

      if (available) {
        current.setAttribute('href', entry.url);
        current.removeAttribute('aria-disabled');
        current.classList.remove('platform-action-disabled', 'writer-download-disabled');
      } else {
        current.removeAttribute('href');
        current.setAttribute('aria-disabled', 'true');
        if (current.classList.contains('platform-action')) current.classList.add('platform-action-disabled');
        if (current.classList.contains('writer-download')) current.classList.add('writer-download-disabled');
      }

      var label = current.querySelector('.platform-status, small');
      if (label && entry.label) label.textContent = entry.label;
    });

    document.querySelectorAll('[data-download-label]').forEach(function (node) {
      var parts = node.getAttribute('data-download-label').split(':');
      var entry = manifest && manifest[parts[0]] && manifest[parts[0]][parts[1]];
      if (entry && entry.label) node.textContent = entry.label;
    });
  }

  function refreshDownloadManifest() {
    fetch('./downloads/apps.json', { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('download manifest unavailable');
        return response.json();
      })
      .then(applyDownloadManifest)
      .catch(function () {
        // Keep the hard-coded links/statuses as a safe fallback.
      });
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
    refreshDownloadManifest();
    showRegion();
    scheduleArtworkPosition();
  });
})(jQuery);
