
// eslint-disable-next-line no-unused-vars
import React,{useContext} from 'react';
import { ThemeContext, ThemeProvider } from './contextApiTheme/ThemeContext';
import { ThemeSwitcher } from './contextApiTheme/ThemeSwitcher';
import Navigationbar from './Navigationbar';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
const App = () => {
    const useTheme=() => useContext(ThemeContext);
    const {theme} = useTheme();
    return (
        <>
        {/* <ThemeProvider>
        
       <div style={{position:"relative",right:0
       }} className={`theme-${theme}`}>
            <label>{theme}</label>
            <ThemeSwitcher/>
        </div>
        </ThemeProvider> */}
    <Router>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
)
}
export default App;