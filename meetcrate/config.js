/* MeetCrate page: the ONLY place the site reads store/checkout links from.
   Going live = edit this one file. Empty CHECKOUT_LIFETIME = "Join the Pro waitlist"; empty STORE_URL = "Coming soon".
   Never put Lemon Squeezy TEST-mode checkout links here: this file is deployed. */
window.MEETCRATE = {
  CHECKOUT_LIFETIME: '',  // live-mode Lemon Squeezy checkout URL, MeetCrate Pro ($29 one-time)
  PRICE_LIFETIME: '$29',
  STORE_URL: ''           // Chrome Web Store listing URL once published (Edge link can be added next to it)
};
