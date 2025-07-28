import { create } from "zustand";



interface AuthState {
  isAutenticated: boolean;
  token: string | null;
  user: string | null;
  Login: (token: string, user: string) => void;
  Logout: () => void;
}

const getInitialState = (): Pick<AuthState, 'isAutenticated' | 'token' | 'user'> => {
  const data = localStorage.getItem('auth');
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return { isAutenticated: false, token: null, user: null };
    }
  }
  return { isAutenticated: false, token: null, user: null };
};

export const useAuthStore = create<AuthState>((set) => ({
  ...getInitialState(),
  Login: (token: string, user: string) => {
    set((state) => {
      const newState = { ...state, isAutenticated: true, token, user };
      localStorage.setItem('auth', JSON.stringify({ isAutenticated: true, token, user }));
      return newState;
    });
  },
  Logout: () => {
    set((state) => {
      localStorage.removeItem('auth');
      return { ...state, isAutenticated: false, token: null, user: null };
    });
  },
}));
