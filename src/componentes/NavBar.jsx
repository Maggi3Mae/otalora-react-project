import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';
import Logo from './../images/logo-main.png'

function NavBar() {
    return (
        <Navbar expand="lg" className="pt-0 pb-0">
        <Link to="/" className="navbar-brand p-0">
        <img src={Logo}alt="Token Store"/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavLink to="/promociones" className="nav-link">
                Promociones
            </NavLink>
            <NavDropdown title="Juegos" id="basic-nav-dropdown">
                <NavLink to="/category/ps4" className="dropdown-item">
                    PS4
                </NavLink>
                <NavLink to="/category/xbox-one" className="dropdown-item">
                    XBOX ONE
                </NavLink>
                <NavLink to="/category/nintendo-switch" className="dropdown-item">
                    Nintendo Switch
                </NavLink>
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
