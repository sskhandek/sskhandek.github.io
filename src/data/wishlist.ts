export interface WishlistItem {
  /** Stable id, e.g. 'sony-wh1000xm5' */
  id: string;
  /** Display name */
  name: string;
  /** Link to the product page */
  url: string;
  /** Optional price as displayed, e.g. '$399' */
  price?: string;
  /** Optional one-liner: size, color, why you want it, etc. */
  note?: string;
  /** Optional ISO date when added, e.g. '2026-10-06' */
  addedAt?: string;
  /** Optional path to a product image under /public, e.g. '/images/wishlist/foo.jpg' */
  image?: string;
}

/**
 * HOW TO ADD AN ITEM (takes ~30 seconds):
 *
 * 1. Open this file in the GitHub app (or github.com) and tap edit.
 * 2. Copy one of the blocks below, paste it at the top of the list,
 *    and fill in the details.
 * 3. Commit. The site rebuilds and deploys automatically in ~1 minute.
 *
 * Template:
 *
 *   {
 *     id: 'short-unique-id',
 *     name: 'Product name',
 *     url: 'https://...',
 *     price: '$99',
 *     note: 'Color/size or why you want it',
 *   },
 *
 * Newest first — friends see the top of the list first.
 */
export const wishlist: WishlistItem[] = [
  {
    id: 'kleiber-beethoven-7-original-source',
    name: 'Beethoven Symphony No. 7, Carlos Kleiber / Vienna Philharmonic (Original Source LP)',
    url: 'https://elusivedisc.com/carlos-kleiber-beethoven-symphony-no-7-the-original-source-series-180g-lp/',
    price: '$39.99',
    note: 'Second Edition, non-numbered, 180g, 100% pure analogue. The Kleiber 7th, not the Karajan version.',
    addedAt: '2026-10-28',
    image: '/images/wishlist/kleiber.jpg',
  },
  {
    id: 'valkyries-mitchell-ness-hat',
    name: 'Golden State Valkyries Mitchell & Ness Cream/Pink Pro Adjustable Hat',
    url: 'https://wnbastore.nba.com/golden-state-valkyries/unisex-golden-state-valkyries-mitchell-and-ness-cream-pink-pro-adjustable-hat/t-24302696+p-357725317543179+z-9-2855006690',
    price: '$37.99',
    note: 'Unisex, one size fits most, snap closure. 25% off site-wide with code SWISH.',
    image: '/images/wishlist/valkyries-hat.jpg',
  },
  {
    id: 'olympus-xa2',
    name: 'Olympus XA2 film camera',
    url: 'https://brooklynfilmcamera.com/collections/cameras/products/olympus-xa2',
    price: '$340',
    note: "Heather's pick for a starter film camera. Bench-tested; optional A11 flash $90.",
    image: '/images/wishlist/xa2.jpg',
  },
  {
    id: 'bose-wired-anc-earbuds',
    name: 'Bose wired ANC earbuds',
    url: 'https://www.bose.com/p/earbuds/bose-noise-cancelling-wired-earbuds/NCWEARB-HEADPHONEIN.html',
    price: '$99',
    note: 'USB-C wired with ANC. Ships Oct 15, 2026.',
    image: '/images/wishlist/bose.jpg',
  },
  {
    id: 'herman-miller-aeron',
    name: 'Herman Miller Aeron',
    url: 'https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/100102649.html?lang=en_US&sku=100102649',
    note: 'Likely size C.',
    image: '/images/wishlist/aeron.jpg',
  },
  {
    id: 'heirloom-sourdough-sofia',
    name: 'Heirloom Sourdough starter "Sofia"',
    url: 'https://heirloomsourdough.com/products/1-oz-active-liquid',
    price: '$14.99, free US shipping',
    note: '100+ year-old San Francisco family sourdough starter, started in 1916 and passed down through four generations. Live liquid-active starter with feeding and care instructions and a beginner-friendly recipe.',
    image: '/images/wishlist/sourdough-sofia.jpg',
  },
  {
    id: 'shiny-magikarp-paldea-evolved',
    name: 'Shiny Magikarp, Paldea Evolved',
    url: 'https://www.tcgplayer.com/product/497606/pokemon-sv02-paldea-evolved-magikarp-203-193',
    price: '$356.60',
    note: 'Ungraded (raw).',
    addedAt: '2026-10-06',
    image: '/images/wishlist/magikarp.jpg',
  },
  {
    id: 'matic-robot-vacuum',
    name: 'Matic robot vacuum',
    url: 'https://maticrobots.com/product',
    price: '$1,495',
    note: 'Robot vacuum + mop with on-device processing.',
    image: '/images/wishlist/matic.webp',
  },
];
