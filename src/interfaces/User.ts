export interface User {
  name: string;
  email: string;
  password: string;
  role: UserRoles;
  google: boolean;
}

export type UserRoles = "ADMIN_ROLE" | "USER_ROLE";
