export interface User {
  _id: string;
  name: string;
  address: string;
  email: string;
  password: string;
}
export interface Token {
  token: string;
}
export interface LoginApiResponse {
  getUser: Token;
}
