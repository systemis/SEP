export interface LoginResponse {
  access_token: string;
};

export class User {
  username: string;
  email: string;
  roles: string[];
  displayName: string;
  avatr: string;
}