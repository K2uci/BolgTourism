export interface StatusUserTypes {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    images: string
  };
}

export interface DataUserTypes {
  id: number;
  name: string;
  email: string;
  images: string
}