import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';



const navbar = () => {
  return (
    <>

      <Navbar expand="lg" className='nav py-3 shadow-sm '  style={{'backgroundcolor':'white'}}>
        <div className='container' fluid>
          <Navbar.Brand className='fw-bold fs-4'><NavLink to="/about">LA COLLECTION</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto mb-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className='active' to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
            <div className="buttons">
              <NavLink  style={{'display':'inline'}} to="/login" className="btn btn-outline-dark p-1">
               <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink  style={{'display':'inline'}} to="/register" className="btn btn-outline-dark p-1 ms-2">
               <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink  style={{'display':'inline'}} to="/cart" className="btn btn-outline-dark p-1 ms-2">
               <i className="fa fa-shopping-cart me-1"></i> Cart (0)
              </NavLink>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet/>
    </>
  )
}

export default navbar
