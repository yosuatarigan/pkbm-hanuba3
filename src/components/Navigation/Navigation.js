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
        <div className="fixed-top">
        <Navbar color="black bg-blue " light expand="md">
          <NavbarBrand onClick={() => history.push(`${match.url}`)}>PKBM HANUBA</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto white" navbar>
            <NavItem>
                <NavLink onClick={() => history.push(`${match.url}alumni`)} >Alumni</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.push(`${match.url}tutor`)} >Tutor</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.push(`${match.url}fasilitas`)}>Fasilitas</NavLink>
              </NavItem>   
              <NavItem>
                <NavLink onClick={() => history.push(`${match.url}galeri`)}>Galeri</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.push(`${match.url}pendaftaran`)}>Pendaftaran</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.push(`${match.url}article`)}>Article</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://setara.kemdikbud.go.id/" target="_blank">Setara Daring</NavLink>
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

