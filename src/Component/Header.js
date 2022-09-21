import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SparkBank</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Transfer">Transfer Money</Nav.Link>
            <Nav.Link href="/Transition">All Transition</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default Header
