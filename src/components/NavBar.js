import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../assets/logo4.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div >
       <Navbar className='fs-4 fs-md-5 fs-lg-6 fw-normal py-3'  bg="black" data-bs-theme="dark"  expand='lg'> <Navbar.Brand href="#home"> 
            <Link to="/crazynjersey" className='nav'><img
            src={logo1}
            alt="Logo"
            className='logo '
          /></Link></Navbar.Brand>
        <Container>
         
          <Nav className="mx-auto justify-content-evenly"  style={{ width: '100%'}}>
            <Link to="/crazynjersey" className='nav'> <span className='nav' >Home</span></Link>
            <Link to="/ourcreations" className='nav'><span  className='nav'>Our Creations</span></Link>
           <Link to="/mission" className='nav'><span  className='nav'>Mission</span></Link>
           <Link to="/ourfamily" className='nav'><span  className='nav'>Our Family</span></Link>
            <Link  className='nav'><span  className='nav'>Contact Us</span></Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
