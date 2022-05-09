import { Auth } from "../../interfaces";
import { AuthState } from "./";

type AuthActionType =
  | { type: "[Auth] - Signup" }
  | { type: "[Auth] - Login"; payload: Auth }
  | { type: "[Auth] - Logout" }
  | { type: "[Auth] - Recover Login"; payload: Auth };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[Auth] - Signup":
      return {
        ...state,
      };

    case "[Auth] - Login":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "[Auth] - Logout":
      return {
        ...state,
        user: null,
        token: null,
      };

    case "[Auth] - Recover Login":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
