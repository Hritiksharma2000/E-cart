import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';




function NavbarComponent( name, ...props) {
  // const cart=useSelector(state=>state.cart)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      return (
      <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 py-4">
          <Container fluid>
          <Navbar.Brand href="/Aboutpage">
            <img
              src="https://www.aerem.co/images/logo.png"
              width="150"
              height="40"
              className="d-inline-block align-top navimg"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='divdata'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Aerem
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-1">
                  <Nav.Link><Link  className='me-4 text-decoration-none text-dark active' to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link  className='me-4 text-decoration-none text-dark' to="/products">Products</Link></Nav.Link>
                  <Nav.Link><Link className='me-4 text-decoration-none text-dark' to="/Aboutpage">About Us</Link></Nav.Link>
                  <Nav.Link><Link className='me-4 text-decoration-none text-dark' to="/Contact">Contact</Link></Nav.Link>
                
                  <Nav.Link href="#action2">
                  <Link  className='me-4' to="#">
                <Button variant='danger' onClick={handleShow}> <i className='fa fa-user-plus me-1'> </i> Register</Button>
                  </Link>
                  </Nav.Link> 
                  <Nav.Link href="/Loginpage">
                  <Link  className='me-4' to="#">
                <Button variant='danger' onClick={handleShow}> <i className='fa fa-sign-in ms-1'> Log in</i> </Button>
                  </Link>
                  </Nav.Link> 
                  <Nav.Link>
                  <Link  className='me-4' to="/Cart">
                <Button variant='danger'> <i className='fa fa-shopping-cart me-1'> </i> Cart</Button>
                {/* ({cart.reduce((v,i)=> v+i.qty, 0)}) */}
                  </Link>
                  </Nav.Link> 
                 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
      <Outlet/>
      <Offcanvas style={{width:'45%'}} show={show} onHide={handleClose} {...props} placement={'end'}>
        <Offcanvas.Header closeButton>
        <p className='m-0 p-0'><h3 className='m-0 p-0'>Register with Aerem</h3> <br />Get started by filling in the information below.</p>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Name of Shop
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder=''/>
        </Col>
      </Form.Group>
      <hr className='opacity-25'/>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Type of Class
        </Form.Label>
        <Col sm="9">
        <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1">All</option>
            <option value="2">jewelery</option>
            <option value="3">Cloths</option>
            <option value="4">Electronics</option>
    </Form.Select>
        </Col>
      </Form.Group>
      <hr className='opacity-25'/>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
         Shop Address
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text"/>
        </Col>
      </Form.Group>
      <hr className='opacity-25'/>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
        Mobile Number
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text"/>
        </Col>
      </Form.Group>
      <hr className='opacity-25'/>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
        Email ID
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text"/>
        </Col>
      </Form.Group>
      <hr className='opacity-25'/>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
        Number of items
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text"/>
        </Col>
      </Form.Group>
      <hr className='opacity-25'/>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I hereby give my consent to be called on the aforementioned number to provide me details about the products and services as described herein, in spite of the fact that my number is registered in the DND (Do Not Disturb)/DNC (Do Not Call) registry." />
      </Form.Group>
      <hr className='opacity-25'/>
      <Button variant="" className='border' type="submit">
        cancel
      </Button>
      <Button className='ms-4' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarComponent;
