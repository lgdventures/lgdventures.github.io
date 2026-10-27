/* ChatCairn page: store/checkout links and prices. The page HTML already carries the live checkout links
   statically (buy state is the default, also without JS); index.html overrides them from here when set.
   Live mode, Lemon Squeezy store 499728. Never put TEST-mode checkout links here: this file is deployed.
   (Test-mode links live only in the extension's src/config.js for local testing.) */
window.CHATCAIRN = {
  PRO_LIVE: true,  // Pro is on sale (since 2026-10-26)
  // Live mode, product 1475011 "ChatCairn Pro" (created 2026-10-26). Monthly = variant 2299598, lifetime = variant 2299599.
  CHECKOUT_MONTHLY: 'https://lgdventures.lemonsqueezy.com/checkout/buy/1b97fab7-f3a6-48fd-b31c-47c10ef59b83',
  CHECKOUT_LIFETIME: 'https://lgdventures.lemonsqueezy.com/checkout/buy/ebfcf527-1c24-4d00-8c5e-31269fe0a6c1?enabled=2299599',
  PRICE_MONTHLY: '$4.99',
  PRICE_LIFETIME: '$39',
  STORE_URL: 'https://chromewebstore.google.com/detail/mnpjimmmommjcaoblccngodapolhamlc',  // Chrome Web Store (0.3.1 live 2026-10-20)
  EDGE_URL: 'https://microsoftedge.microsoft.com/addons/detail/hgaggannjdbhnbmaffgeiiajopmedkhi'  // Edge Add-ons (0.3.2 live 2026-10-19)
};
