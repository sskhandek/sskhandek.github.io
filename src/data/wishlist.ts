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
    id: 'valkyries-mitchell-ness-hat',
    name: 'Golden State Valkyries Mitchell & Ness Cream/Pink Pro Adjustable Hat',
    url: 'https://wnbastore.nba.com/golden-state-valkyries/unisex-golden-state-valkyries-mitchell-and-ness-cream-pink-pro-adjustable-hat/t-24302696+p-357725317543179+z-9-2855006690',
    price: '$37.99',
    note: 'Unisex, one size fits most, snap closure. 25% off site-wide with code SWISH.',
  },
];
