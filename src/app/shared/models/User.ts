export interface User {
  _id: string;
  name: string;
  address: string;
  email: string;
  password: string;
}
export interface LoginApiResponse {
  getUser: User;
}
