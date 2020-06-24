import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/owl.png';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { authed } = props;
  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/"><img src={logo} className='logo-nav' alt='logo'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="/shop/">SHOP</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                CATEGORIES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  MISC
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem >
                  CLOTHING
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  HISTORY
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  WEAPON
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  EDIBLE
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  JEWELRY
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  ART
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          <NavItem className='icon text-dark'><NavLink><FontAwesomeIcon icon={faShoppingCart} /></NavLink></NavItem>

            {authed ? (

            <NavItem className='icon' onClick={this.logMeOut}><FontAwesomeIcon icon={faSignOutAlt}/></NavItem>

            ) : (

            <NavItem className="icon"><NavLink to='/auth'><FontAwesomeIcon icon={faUserAlt} className='user-icon' /></NavLink></NavItem>

            )
            }
             </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
