import React from 'react';
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import  Logo from '../Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <img
                src={Logo}
                alt=""
                width="100"
                height="50"
                className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
 
            <Form inline className="searchPadding">
            <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
            </Form>



            <Nav className="mr-auto">
            <Nav.Link href="/home"><span className="topicPadding">Home</span></Nav.Link>
            <Nav.Link href="/destination"><span className="topicPadding">Destination</span></Nav.Link>
            <Nav.Link href="/blog"><span className="topicPadding">Blog</span></Nav.Link>
            <Nav.Link href="/contact"><span className="topicPadding">Contact</span></Nav.Link>
            </Nav>

            <Form inline>
            <Button variant="warning" className="logInbutton">Login</Button>
            </Form>
            

            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;