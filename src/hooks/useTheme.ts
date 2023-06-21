import { useEffect, useState } from "react";

import { Theme } from "../contexts/theme.context";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "dark"
  );

  const toggleTheme = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.add(theme);

    if (theme === "light") {
      (document.querySelector('input[type="checkbox"]') as HTMLInputElement).checked = true;
      document.body.classList.remove("dark");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
