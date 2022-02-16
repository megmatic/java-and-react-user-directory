import React from 'react'
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap"
import { Link } from "react-router-dom"

function Header() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        <Nav className="ml-auto" navbar>
        </Nav>
    </Navbar>
  )
}

export default Header