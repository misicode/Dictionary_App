import { ThemeContext } from "../contexts/theme.context";
import { useTheme } from "../hooks/useTheme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
