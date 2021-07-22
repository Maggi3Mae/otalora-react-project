import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar expand="lg">
        <Link to="/">
        <Navbar.Brand href="#home">TokenStore</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Promociones</Nav.Link>
            <NavDropdown title="Juegos" id="basic-nav-dropdown">
                <Link to="/category/ps4">
                    <NavDropdown.Item href="#action/3.1">PS4</NavDropdown.Item>
                </Link>
                <Link to="/category/xbox-one">
                    <NavDropdown.Item>XBOX ONE</NavDropdown.Item>
                </Link>
                <Link to="/category/nintendo-switch">
                 Nintendo Switch
                </Link>
            </NavDropdown>            
            </Nav>
            <Form inline>            
            <FormControl type="text" placeholder="Buscar en la tienda" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
            </Form>
        </Navbar.Collapse>
        <CartWidget/> 
        </Navbar>
    )
}

export default NavBar
