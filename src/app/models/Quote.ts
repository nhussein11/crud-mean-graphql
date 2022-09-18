export interface Quote {
    id: string,
    quote: string,
    author: string
}
export type NewQuote = Omit<Quote, 'id'>
