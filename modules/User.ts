export interface CurrentUser {
  jwt: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  provider: string;
  blocked: boolean;
  contactNumber: number;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
  auth0ID: string;
  firstName: string;
  lastName: string;
  role: Role;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}
