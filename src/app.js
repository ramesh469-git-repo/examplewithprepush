
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navigationbar from './Navigationbar';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
const App = () => {
    return (
        <>
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