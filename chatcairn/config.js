/* ChatCairn page: the ONLY place the site reads store/checkout links from.
   Going live = edit this one file (and src/config.js in the extension).
   Empty CHECKOUT_* = Pro shows "Join the Pro waitlist".
   STORE_URL / EDGE_URL are the live listings (reference; the page HTML carries static links with per-placement UTM tags).
   Both CHECKOUT_* must be set (live mode) for the buy buttons to appear.
   Never put Lemon Squeezy TEST-mode checkout links here: this file is deployed.
   (Test-mode links live only in the extension's src/config.js for local testing.) */
window.CHATCAIRN = {
  CHECKOUT_MONTHLY: '',   // live-mode Lemon Squeezy checkout URL, Pro monthly variant
  CHECKOUT_LIFETIME: '',  // live-mode Lemon Squeezy checkout URL, Pro lifetime variant
  PRICE_MONTHLY: '$4.99',
  PRICE_LIFETIME: '$39',
  STORE_URL: 'https://chromewebstore.google.com/detail/mnpjimmmommjcaoblccngodapolhamlc',  // Chrome Web Store (0.3.1 live 2026-10-20)
  EDGE_URL: 'https://microsoftedge.microsoft.com/addons/detail/hgaggannjdbhnbmaffgeiiajopmedkhi'  // Edge Add-ons (0.3.2 live 2026-10-19)
};
