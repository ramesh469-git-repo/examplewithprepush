import React,{ useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// import { useTheme } from "./ThemeContext";
import "./ThemeSwitcher.css";
import "../app.css";
export const ThemeSwitcher =()=>{
    const useTheme=() => useContext(ThemeContext);
    const {theme,toggleTheme}=useTheme();

    return(
        <div className="themetoggle-switch">
            {/* <h1 className={`theme-${theme}`}>ThemeSwitcher</h1> */}
            {/* <button onClick={toggleTheme}>Click to change the {theme==="light"?"dark":"light"} Theme</button> */}
            <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox" onChange={toggleTheme}
        />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        >
        <span className={`react-switch-button`} />
        <span className="themelabel">{theme}</span>
        </label>
        </div>
        
    )
}