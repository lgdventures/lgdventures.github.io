/* ChatCairn page: the ONLY place the site reads store/checkout links from.
   Going live = edit this one file (and src/config.js in the extension).
   Empty CHECKOUT_* = Pro shows "Join the Pro waitlist"; empty STORE_URL = "Coming soon to the Chrome Web Store".
   Both CHECKOUT_* must be set (live mode) for the buy buttons to appear.
   Never put Lemon Squeezy TEST-mode checkout links here: this file is deployed.
   (Test-mode links live only in the extension's src/config.js for local testing.) */
window.CHATCAIRN = {
  CHECKOUT_MONTHLY: '',   // live-mode Lemon Squeezy checkout URL, Pro monthly variant
  CHECKOUT_LIFETIME: '',  // live-mode Lemon Squeezy checkout URL, Pro lifetime variant
  PRICE_MONTHLY: '$4.99',
  PRICE_LIFETIME: '$39',
  STORE_URL: ''           // Chrome Web Store listing URL once published
};
