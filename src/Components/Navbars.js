import React from 'react';
import './Navbar.css';
import nts from './Images/nts.jpg';
import { Nav, Navbar } from 'react-bootstrap';




const Navbars = () => {
    return (
            <Navbar className="color-nav" expand="lg">
            <svg className="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7040C8" fill-opacity="0.35" d="M0,128L60,138.7C120,149,240,171,360,154.7C480,139,600,85,720,74.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <Navbar.Brand href="/" ><img className="logo" src={nts} alt="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
          <Navbar.Text className="middle"></Navbar.Text>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/" className="right-corner"><p>Home</p></Nav.Link>
          <Nav.Link href="/about" className="right-corner"><p>About</p></Nav.Link>
          <Nav.Link href="/contact" className="right-corner"><p>Contact</p></Nav.Link>
          <Nav.Link href="/gallery" className="right-corner"><p>Gallery</p></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    
            
    )
}

export default Navbars
