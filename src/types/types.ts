export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string | null;
}

export interface SelectOption {
  id: number;
  name: string;
}

export * from "../components";
export * from "../context";
export * from "../hooks";
export * from "../types";
