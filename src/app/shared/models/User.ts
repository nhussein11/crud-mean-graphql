export interface User {
  _id: string;
  name: string;
  address: string;
  email: string;
  password: string;
}
export type UserWithoutPassword = Omit<User, 'password'>;
export interface LoginResponse {
  token: string;
  user: UserWithoutPassword;
}
export interface LoginApiResponse {
  getUser: LoginResponse;
}
