import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../Styles/NavBar.css';

export default function NavBar() {
    const aristasImg = new URL("../Img/logo.png", import.meta.url);

    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/"}>
                        <img src={aristasImg} width="200px" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Equipo</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Tratamientos</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}