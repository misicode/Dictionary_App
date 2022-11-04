import React, { useState, useEffect } from 'react';

import { themes, ThemeContext } from './ThemeContext';

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState(
    (localStorage.getItem('dictionary-theme')) ? localStorage.getItem('dictionary-theme') : themes.dark
  );

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        localStorage.setItem('dictionary-theme', 'light-theme');
        document.querySelector('input[type="checkbox"]').checked = true;
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        
        break;
      case themes.dark:
      default:
        localStorage.setItem('dictionary-theme', 'dark-theme');
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