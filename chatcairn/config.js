/* ChatCairn page: the ONLY place the site reads store/checkout links from.
   PRO_LIVE is the single go-live switch. false = Pro waitlist ("Join the Pro waitlist", no buy buttons; the checkout
   URLs below are never written into the page). true = buy buttons open the live checkout links and the waitlist copy
   is swapped for on-sale copy. Flip it only after Lemon Squeezy activates store 499728 (until then the links 404).
   STORE_URL / EDGE_URL are the live listings (reference; the page HTML carries static links with per-placement UTM tags).
   Buy buttons appear only when PRO_LIVE is true AND both CHECKOUT_* are set (live mode).
   Never put Lemon Squeezy TEST-mode checkout links here: this file is deployed.
   (Test-mode links live only in the extension's src/config.js for local testing.) */
window.CHATCAIRN = {
  PRO_LIVE: false,  // GO-LIVE SWITCH: set true on Lemon Squeezy approval day (the only change needed)
  // Live mode, product 1475011 "ChatCairn Pro" (created 2026-10-26). Monthly = variant 2299598, lifetime = variant 2299599.
  CHECKOUT_MONTHLY: 'https://lgdventures.lemonsqueezy.com/checkout/buy/1b97fab7-f3a6-48fd-b31c-47c10ef59b83',
  CHECKOUT_LIFETIME: 'https://lgdventures.lemonsqueezy.com/checkout/buy/ebfcf527-1c24-4d00-8c5e-31269fe0a6c1?enabled=2299599',
  PRICE_MONTHLY: '$4.99',
  PRICE_LIFETIME: '$39',
  STORE_URL: 'https://chromewebstore.google.com/detail/mnpjimmmommjcaoblccngodapolhamlc',  // Chrome Web Store (0.3.1 live 2026-10-20)
  EDGE_URL: 'https://microsoftedge.microsoft.com/addons/detail/hgaggannjdbhnbmaffgeiiajopmedkhi'  // Edge Add-ons (0.3.2 live 2026-10-19)
};
