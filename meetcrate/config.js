/* MeetCrate page: the ONLY place the site reads store/checkout links from.
   Empty CHECKOUT_LIFETIME = "Join the Pro waitlist". Store install links are static in index.html (per-placement UTM, rendered by scripts/site_gen.py).
   Never put Lemon Squeezy TEST-mode checkout links here: this file is deployed. */
window.MEETCRATE = {
  CHECKOUT_LIFETIME: '',  // live-mode Lemon Squeezy checkout URL, MeetCrate Pro ($29 one-time)
  PRICE_LIFETIME: '$29',
  STORE_URL: '',          // Chrome Web Store listing URL once published (T-072); Chrome is "coming soon" until then
  STORE_URL_EDGE: 'https://microsoftedge.microsoft.com/addons/detail/cloojflpimbjgnfhohjmiblmgkmfggcj'  // live since 2026-10-19
};
