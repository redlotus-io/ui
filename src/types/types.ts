export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string | null;
}
export interface SelectOption<T> {
  id: number;
  name: T;
}
