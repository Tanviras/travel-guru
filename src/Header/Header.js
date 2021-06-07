import React from 'react';
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  Logo from '../Logo.png';
import logoWhite from '../Image/logo-white.svg';
import './Header.css';

const Header = () => {
    return (
      <div className="container">
        <Navbar className="mt-3" bg="transparent" variant="dark">

          <Link to="/home">
            <Navbar.Brand style={{paddingRight:'200'}}>
              <img id="logo" src={logoWhite} alt="Travel Guru"/>
            </Navbar.Brand>
          </Link>
  
          <Form inline>
            <FormControl
              id="searchBar"
              type="text"
              placeholder="Search Your Destination..."
              className="mr-sm-2"
            ></FormControl>
          </Form>
          
          <Nav>
            <Nav.Link className="ml-5" href="/home">
             <span style={{color:'white'}}>Home</span> 
            </Nav.Link>
            <Nav.Link className="ml-3" href="/destination">
              <span style={{color:'white'}}>Destination</span>
            </Nav.Link>
            <Nav.Link className="ml-3" href="/blog">
              <span style={{color:'white'}}>Blog</span>
            </Nav.Link>
            <Nav.Link className="ml-3" href="/contact">
              <span style={{color:'white'}}>Contact</span>
            </Nav.Link>
            <button className="ml-3  loginButton">
              <Nav.Link href="/login" className="loginButtonText">
                <span style={{color:'white'}}>Login</span>
              </Nav.Link>
            </button>
          </Nav>
          
        </Navbar>
      </div>
    );
  };

  

  export default Header;