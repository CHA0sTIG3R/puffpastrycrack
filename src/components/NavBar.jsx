import React from 'react';
import styled from 'styled-components';
import { Nav, NavDropdown } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

const List = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    background: linear-gradient(35deg, #494949, #313131);
`;

const SNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    color: white;

    (NavDropdown){
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 2rem 0rem;
    }
`;

function NavBar() {
  return (
    <Nav>
        <List>
            <SNavLink to='/'>
                <h4>Home</h4>
            </SNavLink>
            <NavDropdown as={SNavLink} to='/recipes' title='Recipes'>
                
                    <NavDropdown.Item as={Link} to='/recipes/Pastry'>Pastry</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/recipes/Culinary'>Culinary</NavDropdown.Item>
                
            </NavDropdown>
            <SNavLink to='/about'>
                <h4>About</h4>
            </SNavLink>
        </List>
    </Nav>
  )
}

export default NavBar