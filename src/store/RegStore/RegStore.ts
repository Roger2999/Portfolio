import { create } from "zustand";
interface RegisterState {
  email: string | null;
  token: string | null;
  isRegister: boolean;
  register: (email: string, token: string) => void;
  unregister: () => void;
}
const TOKEN_KEY = "reg_token";
const EMAIL_KEY = "reg_email";

const getInitialEmail = () => {
  return localStorage.getItem(EMAIL_KEY);
};
const getInitialToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const RegStore = create<RegisterState>((set) => ({
  email: getInitialEmail(),
  token: getInitialToken(),
  isRegister: !!getInitialToken(),
  register: (email, token) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(EMAIL_KEY, email);
    set({
      email,
      token,
      isRegister: true,
    });
  },
  unregister: () =>
    set({
      email: null,
      token: null,
      isRegister: false,
    }),
}));
