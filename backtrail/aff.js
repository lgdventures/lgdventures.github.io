/* BackTrail first-party affiliate passthrough (T-052). Reads ?aff= from this page's URL and adds it to
   Lemon Squeezy checkout links. No third-party script, no cookie, no localStorage/sessionStorage. */
(function () {
  var aff;
  try { aff = new URLSearchParams(location.search).get('aff'); } catch (e) { return; }
  if (!aff || !/^[A-Za-z0-9_-]{1,64}$/.test(aff)) return;
  function tag(a) {
    try {
      var u = new URL(a.href, location.href);
      var h = u.hostname.toLowerCase();
      if (h !== 'lemonsqueezy.com' && !/\.lemonsqueezy\.com$/.test(h)) return;
      if (u.searchParams.get('aff') === aff) return;
      u.searchParams.set('aff', aff);
      a.href = u.toString();
    } catch (e) {}
  }
  function all() { document.querySelectorAll('a[href]').forEach(tag); }
  all();
  /* Also at click time, in case a later script set or changed a checkout href. */
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (a) tag(a);
  }, true);
})();
