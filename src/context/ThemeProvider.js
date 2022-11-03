import React, { useState, useEffect } from 'react';

import { themes, ThemeContext } from './ThemeContext';

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        break;
      case themes.dark:
      default:
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      { props.children }
    </ThemeContext.Provider>
  );
}