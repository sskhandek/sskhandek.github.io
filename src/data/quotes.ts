export interface Quote {
  /** Stable id used for keys and image filenames */
  id: string;
  /** Path under /public, e.g. /images/quotes/arrival.jpg */
  image: string;
  /** Short accessible description of the quote image */
  alt: string;
  /** Optional attribution shown under the image */
  source?: string;
}

/**
 * Drop quote images in public/images/quotes/ and add an entry here.
 * Newest first.
 */
export const quotes: Quote[] = [
  // Example once you add the file:
  // {
  //   id: 'arrival-language',
  //   image: '/images/quotes/arrival.jpg',
  //   alt: 'Quote from Arrival about language shaping thought',
  //   source: 'Arrival',
  // },
];
