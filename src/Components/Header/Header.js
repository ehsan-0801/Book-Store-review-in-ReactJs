import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Customlink from '../Customlink/Customlink';

const Header = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Customlink className="mx-4" to="/home">HOME</Customlink>
                            <Customlink className="mx-4" to="/reviews">REVIEWS</Customlink>
                            <Customlink className="mx-4" to="/dashboard">DASHBOARD</Customlink>
                            <Customlink className="mx-4" to="/blog">BLOG</Customlink>
                            <Customlink className="mx-4" to="/about">ABOUT</Customlink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;