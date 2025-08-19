import { create } from "zustand";

// 1. Definir tipos específicos para el tema
type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme | null;
  toggleTheme: () => void; //función que no retorna valor
}
const THEME_KEY = "theme_key";

// 3. Función para obtener tema inicial con manejo de SSR
const getInitialTheme = (): Theme | null => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme ? (savedTheme as Theme) : null;
};

// 4. Crear store tipado correctamente
export const ThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";

      localStorage.setItem(THEME_KEY, newTheme);

      return { theme: newTheme };
    }),
}));
