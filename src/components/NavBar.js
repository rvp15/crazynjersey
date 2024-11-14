import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../assets/logo4.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div >
       <Navbar className='fs-4 fs-md-5 fs-lg-6 fw-normal'  bg="black" data-bs-theme="dark"  expand='lg'> <Navbar.Brand href="#home"> 
            <img
            src={logo1}
            alt="Logo"
            className='logo '
          /></Navbar.Brand>
        <Container>
         
          <Nav className="mx-auto justify-content-evenly"  style={{ width: '100%'}}>
            <Link to="/" className='nav'> <span className='nav' >Home</span></Link>
            <Link to="/ourcreations" className='nav'><span  className='nav'>Our Creations</span></Link>
           <Link className='nav'><span  className='nav'>Mission</span></Link>
           <Link className='nav'><span  className='nav'>Our Family</span></Link>
            <Link  className='nav'><span  className='nav'>Contact Us</span></Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
