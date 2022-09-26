export interface Quote {
  __typename?: string;
  _id: string;
  quote: string;
  author: string;
  year: number;
}
export type NewQuote = Omit<Quote, '_id'>;
export interface QuotesApiResponse {
  allQuotes: Quote[];
}
