export interface Quote {
  _id: string;
  quote: string;
  author: string;
}
export type NewQuote = Omit<Quote, '_id'>;
