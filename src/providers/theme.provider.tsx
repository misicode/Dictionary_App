import { useMemo } from "react";
import { useTheme } from "../hooks/useTheme";

import { ThemeContext } from "../contexts/theme.context";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme } = useTheme();
  
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={ value }>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
