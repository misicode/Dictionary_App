import { createContext } from "react";

export const themes = {
  light: "light-theme",
  dark: "dark-theme"
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});