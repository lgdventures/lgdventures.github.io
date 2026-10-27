/* MeetCrate page: the ONLY place the site reads store/checkout links from.
   The Pro buy link is also rendered as a static href in index.html (scripts/site_gen.py). Store install links are static in index.html (per-placement UTM, rendered by scripts/site_gen.py).
   Never put Lemon Squeezy TEST-mode checkout links here: this file is deployed. */
window.MEETCRATE = {
  CHECKOUT_LIFETIME: 'https://lgdventures.lemonsqueezy.com/checkout/buy/ab15c028-0777-4bc6-b28c-db1e52b117d4',  // live-mode Lemon Squeezy checkout URL, MeetCrate Pro ($29 one-time)
  PRICE_LIFETIME: '$29',
  STORE_URL: 'https://chromewebstore.google.com/detail/adpkgbamjibcfecamldpopjpgbhgjchh',  // Chrome Web Store listing, live since 2026-10-27
  STORE_URL_EDGE: 'https://microsoftedge.microsoft.com/addons/detail/cloojflpimbjgnfhohjmiblmgkmfggcj'  // live since 2026-10-19
};
