import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">TokenStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Promociones</Nav.Link>
            <NavDropdown title="Juegos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">PS4</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">XBOX ONE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Nintendo Switch</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Buscar en la tienda" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
