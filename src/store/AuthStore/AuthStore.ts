import { create } from "zustand";



interface AuthState {
  isAutenticated: boolean;
  token: string | null;
  user: string | null;
  login: (token: string, user: string) => void;
  logout: () => void;
}
const TOKEN_KEY:string="auth_token"
const USER_KEY:string="auth_user"

const getinitialToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
}
const getinitialUser = (): string | null => {
  return localStorage.getItem(USER_KEY);
}

export const AuthStore = create<AuthState>((set) => ({
user:getinitialUser(),
token: getinitialToken(),
isAutenticated:!!getinitialToken(),
  login: (token, user) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, user);
    set({ token, user, isAutenticated: true });
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  set({
    token: null, user: null, isAutenticated: false
  });
  }
}));
