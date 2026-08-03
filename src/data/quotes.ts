export interface Quote {
  /** Stable id used for keys */
  id: string;
  /** The quote text (shown typographically, or used as image alt text) */
  text: string;
  /** Film / source attribution */
  source: string;
  /**
   * Optional screenshot under /public, e.g. /images/quotes/life-of-pi.jpg.
   * When present, the image is shown instead of the typographic quote.
   */
  image?: string;
}

/**
 * Newest first. Optional images live in public/images/quotes/.
 */
export const quotes: Quote[] = [
  {
    id: 'before-sunrise-saved-time',
    text: 'People always talk about how great technology is, how it saves all this time. But what good is saved time if nobody uses it? It just turns into more busy work.',
    source: 'Before Sunrise',
    image: '/images/quotes/before-sunrise.jpg',
  },
  {
    id: 'life-of-pi-letting-go',
    text: 'I suppose in the end, the whole of life becomes an act of letting go, but what always hurts the most is not taking a moment to say goodbye.',
    source: 'Life of Pi',
  },
];
