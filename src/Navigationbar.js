import React,{useContext} from 'react';
import { ThemeContext, ThemeProvider } from './contextApiTheme/ThemeContext';
import { ThemeSwitcher } from './contextApiTheme/ThemeSwitcher';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigationbar = () => {
    const useTheme=() => useContext(ThemeContext);
      const {theme} = useTheme();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">MyApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="link">Link</Nav.Link>
       
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Navbar.Collapse>
      <Nav>
        <ThemeProvider>
            <ThemeSwitcher/>
         </ThemeProvider>
        </Nav>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end right-logout-nav">
      <Nav className="mr-auto" style={{marginRight: '10px'}}>
        <NavDropdown title="User" id="logout-nav-dropdown" className="dropdown-menu-left">
          <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
