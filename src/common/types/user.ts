export interface User {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
  }
  export interface LoginUser {
    email?: string;
    password?: string;
  }
  export interface User extends LoginUser {
    userName?: string;
  }
  
  export interface CreateUser extends User {
    confirmPassword?: string;
  }
  