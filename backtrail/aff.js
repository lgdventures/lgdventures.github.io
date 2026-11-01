/* BackTrail first-party passthrough (T-052 + UTM). Reads ?aff= and utm_source/utm_medium/utm_campaign from
   this page's URL and adds them to Lemon Squeezy checkout links (aff as ?aff=, UTMs as checkout[custom][utm_*]).
   No third-party script, no cookie, no localStorage/sessionStorage. */
(function () {
  var q;
  try { q = new URLSearchParams(location.search); } catch (e) { return; }
  var set = [];
  var aff = q.get('aff');
  if (aff && /^[A-Za-z0-9_-]{1,64}$/.test(aff)) set.push(['aff', aff]);
  ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (k) {
    var v = q.get(k);
    if (v && /^[A-Za-z0-9._~-]{1,100}$/.test(v)) set.push(['checkout[custom][' + k + ']', v]);
  });
  if (!set.length) return;
  function tag(a) {
    try {
      var u = new URL(a.href, location.href);
      var h = u.hostname.toLowerCase();
      if (h !== 'lemonsqueezy.com' && !/\.lemonsqueezy\.com$/.test(h)) return;
      var changed = false;
      set.forEach(function (p) {
        if (u.searchParams.get(p[0]) !== p[1]) { u.searchParams.set(p[0], p[1]); changed = true; }
      });
      if (changed) a.href = u.toString();
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
