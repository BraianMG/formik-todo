import { FC, useEffect, useReducer } from "react";
import { axiosClient } from "../../config";
import { handleSession } from "../../helpers";
import { User } from "../../interfaces";
import { Auth } from "../../interfaces/Auth";
import { AuthContext, authReducer } from "./";

export interface AuthState {
  user: User | null;
  token: string | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  user: null,
  token: null,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const searchAuth = () => {
    const auth: Auth = handleSession();
    dispatch({ type: "[Auth] - Login", payload: auth });
  };

  const login = async (email: string, password: string) => {
    const { data } = await axiosClient.post<Auth>("/auth/login", {
      email,
      password,
    });
    window.localStorage.setItem(
      "loggedToDoAppUser",
      JSON.stringify(data.token)
    );

    dispatch({ type: "[Auth] - Login", payload: data });
  };

  const logout = () => {
    dispatch({ type: "[Auth] - Logout" });
  };

  useEffect(() => {
    searchAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
