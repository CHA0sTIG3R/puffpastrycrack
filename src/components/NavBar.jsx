import React, {useState} from 'react';
import { Nav, Navbar, NavDropdown, Container, Form, Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'
import {NavLink, useNavigate} from 'react-router-dom';


function NavBar() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    } 

    return (
    <Navbar bg='dark' variant='dark'  expand='lg' sticky='top'>
        <Container fluid>
            <Navbar.Brand href='/'>PuffPastryCrack</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar'/>
            <Navbar.Collapse id='navbar'>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <NavDropdown
                        title='Recipes' 
                        menuVariant='light'
                        id='navbar-dropdown'
                    >
                        <NavDropdown.Item as={NavLink} to='/recipes/All'>All Recipes</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/recipes/Pastry'>Pastry</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/recipes/Culinary'>Cookery</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className='d-flex' onSubmit={submitHandler}>
                    <Form.Control
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type='search'
                        placeholder='Search Recipes'
                        className='me-2'
                        aria-label='Search'
                    />
                    <Button variant='outline-success' onClick={submitHandler}>
                        <FaSearch></FaSearch>
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar