import { axiosClient } from "../config";
import { Auth } from "../interfaces";

const handleSession = (): Auth => {
  const loggedUserJSON = window.localStorage.getItem("loggedToDoAppUser");

  if (loggedUserJSON) {
    const loggedUser = JSON.parse(loggedUserJSON);

    if (loggedUser) {
      if (loggedUser.user && loggedUser.token) {
        axiosClient.defaults.headers.common["x-token"] = loggedUser.token;

        return {
          user: loggedUser.user,
          token: loggedUser.token,
        };
      }
    }
  }

  return { user: null, token: null };
};

export default handleSession;
