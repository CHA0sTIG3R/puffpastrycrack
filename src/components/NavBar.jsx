import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


function NavBar() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
        <Container>
            <Navbar.Brand href='/'>PuffPastryCrack</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-dark-example'/>
            <Navbar.Collapse id='navbar-dark-example'>
                <Nav>
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <NavDropdown
                        title='Recipes' 
                        menuVariant='dark' 
                        id='navbar-dropdown-dark-example'
                    >
                        <NavDropdown.Item as={NavLink} to='/recipes/All'>All Recipes</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/recipes/Pastry'>Pastry</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/recipes/Culinary'>Culinary</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar