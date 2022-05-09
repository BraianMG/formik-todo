import { createContext } from "react";
import { User } from "../../interfaces";

interface ContextProps {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);
