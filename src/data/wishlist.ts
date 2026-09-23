export interface WishlistItem {
  /** Stable id used for keys */
  id: string;
  /** What the thing is */
  name: string;
  /** Why I want it, size/color preferences, anything useful */
  note?: string;
  /** Rough price, e.g. '$40' or '$100–150' */
  price?: string;
  /** Where to buy it */
  url?: string;
}

/**
 * Newest first. Add an item by copying a block below.
 */
export const wishlist: WishlistItem[] = [
  {
    id: 'example-running-socks',
    name: 'Merino running socks',
    note: 'Crew height, size L. Any brand — I go through these fast.',
    price: '$20',
    url: 'https://www.google.com/search?q=merino+running+socks',
  },
  {
    id: 'example-espresso-beans',
    name: 'A bag of espresso beans',
    note: 'Whole bean, medium roast, from a roaster you like.',
    price: '$20–25',
  },
];
