import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Style.css'
import { Link } from 'react-router-dom';
const Header  = () => {
  return (
    <div>
      <Navbar expand="lg" className={`navbar_bg bg-body-tertiary`}>
      <Container fluid>
        <Navbar.Brand className="logo" href="#"><span>M</span>cinem<span>A</span>pp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto m-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link   href="#"> <Link to={'/latest'} className='navlinks'> Latest Movies</Link></Nav.Link>
            <Nav.Link   href="#"><Link to={'/comedy'} className='navlinks'> Comedy Movies</Link></Nav.Link>
            <Nav.Link   href="#"><Link to={'/popular'} className='navlinks'>Popular movies</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header