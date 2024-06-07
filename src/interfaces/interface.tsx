
export interface IUserData {
    email: string;
    password: string;
    address: string;
    username: string;
  }

  export interface IFormInput {
    label: string;
    type: string;
    name: keyof IUserData;
    id: string;
  }
