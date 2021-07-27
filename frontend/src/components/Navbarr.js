import React from 'react'
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'
const Navbarr = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand to="/"><i class="bi bi-code-slash"></i> Developer Blog</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ flexGrow: '0' }}>
            <Nav>
              <LinkContainer to="/myblogs">
                <Nav.Link >My Blogs</Nav.Link>
              </LinkContainer>
              <LinkContainer  to="/writeblogs">
                <Nav.Link >
                  Write Blog here!
                </Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr
