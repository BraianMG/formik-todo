import { User } from "./";

export interface Auth {
  user: User | null;
  token: string | null;
}
