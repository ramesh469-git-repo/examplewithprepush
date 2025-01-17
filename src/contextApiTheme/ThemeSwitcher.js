import React,{ useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// import { useTheme } from "./ThemeContext";
import "../app.css";
export const ThemeSwitcher =()=>{
    const useTheme=() => useContext(ThemeContext);
    const {theme,toggleTheme}=useTheme();

    return(
        <div>
            <h1 className={`theme-${theme}`}>ThemeSwitcher</h1>
            <button onClick={toggleTheme}>Click to change the {theme==="light"?"dark":"light"} Theme</button>
        </div>
    )
}