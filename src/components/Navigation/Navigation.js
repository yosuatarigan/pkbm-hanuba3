import React, { useState } from 'react';
import {withRouter, Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const Navigation = ({history,match}) => {

    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="black bg-washed-green " light expand="md">
          <NavbarBrand onClick={() => history.push(`${match.url}`)}>PKBM HANUBA</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink onClick={() => history.push(`${match.url}alumni`)} >Alumni</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.push(`${match.url}tutor`)} >Tutor</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.push(`${match.url}fasilitas`)}>Fasilitas</NavLink>
              </NavItem>              
            </Nav>
            <NavbarText className="pr3" onClick={() => history.push(`${match.url}admin`)} >Admin</NavbarText>
            <NavbarText onClick={() => history.push(`${match.url}info`)}>Info</NavbarText>
          </Collapse>
        </Navbar>

       
      </div>


    );
}

export default withRouter(Navigation);

