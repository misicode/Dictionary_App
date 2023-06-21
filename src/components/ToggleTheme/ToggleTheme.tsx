import { useContext } from "react";

import { ThemeContext } from "../../contexts/theme.context";

import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch" aria-label="theme_mode">
      <input type="checkbox" onClick={ toggleTheme } aria-label="switch_theme_mode" />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleTheme;
