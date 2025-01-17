
// eslint-disable-next-line no-unused-vars
import React,{useContext} from 'react';
import { ThemeContext, ThemeProvider } from './contextApiTheme/ThemeContext';
import { ThemeSwitcher } from './contextApiTheme/ThemeSwitcher';

const App = () => {
    const useTheme=() => useContext(ThemeContext);
    const {theme} = useTheme();
    return (
        <ThemeProvider>
        <div className={`theme-${theme}`}>
            <h1>Hello, World!</h1>
            <h2>{theme}</h2>
            <ThemeSwitcher/>
        </div>
        </ThemeProvider>
    );
};

export default App;