export interface User {
  _id: string;
  name: string;
  address: string;
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  user: Omit<User, 'password'>;
}
export interface LoginApiResponse {
  getUser: LoginResponse;
}
