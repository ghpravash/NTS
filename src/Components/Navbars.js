import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import nts from './Images/nts.jpg';




const Navbars = () => {
    return (
        
            <Navbar className="color-nav" expand="lg" variant="dark"> 

            <svg className="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7040C8" fill-opacity="0.35" d="M0,128L60,138.7C120,149,240,171,360,154.7C480,139,600,85,720,74.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <Container  className="nav-container">
            
                <Navbar.Brand href="/" ><img className="logo" src={nts}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/" style={{ fontSize:"18px"}}>Home</Nav.Link>
                    <Nav.Link href="/about" className="nav-about" style={{ fontSize:"18px"}}>About</Nav.Link>
                    <Nav.Link href="/contact" style={{ fontSize:"18px"}}>Contact</Nav.Link>
                    <Nav.Link href="/gallery" className="nav-services" style={{ fontSize:"18px"}}>Gallery</Nav.Link>    
                </Nav>
                </Navbar.Collapse>
                
            </Container>
            </Navbar>
            
            
    )
}

export default Navbars
