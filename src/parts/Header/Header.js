import { useState } from "react";

import { themes, ThemeContext } from "../../context/ThemeContext";
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';

import './Header.css';

export default function Header() {
    const [darkTheme, setDarkTheme] = useState(
        localStorage.getItem('dictionary-theme') ?
            (localStorage.getItem('dictionary-theme') === 'dark-theme') ? true : false
            :
            true
    );

    return (
        <header>
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <ToggleTheme 
                        onClick={() => {
                            setDarkTheme(!darkTheme);
                            changeTheme(darkTheme ? themes.light : themes.dark);
                        }}
                    />
                )}
            </ThemeContext.Consumer>
        </header>
    );
}  