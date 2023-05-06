import { Link } from "react-router-dom";
import './Aeremcss.css';
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aeremcss.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const popover = (
  <Popover id="popover-basic" className="m-5">
    <Popover.Header className="bg-danger text-light" as="h3">Please fill out the form below and we will get back to you as soon as possible.</Popover.Header>
    <Popover.Body>
    <FloatingLabel
        controlId="floatingInput"
        label="* Name"
        className="mb-3"
      >
        <Form.Control type="text"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="* Email"  className="mb-3">
        <Form.Control type="text"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="* Message"  >
        <Form.Control type="text"/>
      </FloatingLabel>
      <button type="submit" className="bg-danger mt-5 w-100 p-2 fs-6 border rounded border-none text-light">Submit</button>
    </Popover.Body>
  </Popover>
);

const Footers=()=>{
    return (
        <>
        
    <div className="container-fluid bg-light pb-5  section10">
            <div className="row col-12 ms-5 pt-5">
              <div className="col-12 col-md-3">
                <img className="mt-5 ms-5" src="https://www.aerem.co/images/logo.png" alt="footer img" width="50%"/>
                <p  className="mt-4 ms-5">+91 8104279409</p>
                <p  className="mt-3 ms-5">connect@DreShop.co</p>
                <div className="d-flex ms-5"><Link href="#" className="icon1"><ion-icon  size='large'name="logo-linkedin"></ion-icon></Link> <Link href="#" className="icon2 ms-3"><ion-icon size='large' name="logo-instagram"></ion-icon></Link> <Link href="#" className="icon1 ms-3"><ion-icon size='large' name="logo-facebook"></ion-icon></Link> <Link href="#" className="icon3 ms-3"><ion-icon size='large' name="logo-twitter"></ion-icon></Link></div>
              </div>
              <div className="col-12 col-md-2 text-center ">
                <Link href="#">Careers</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
              </div>
              <div className="col-12 col-md-1 text-center ">
                <Link href="#">FAQs</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Terms</Link>
              </div>
              <div className="col-12 col-md-2 text-center">
                <Link href="#">Regulatory</Link>
                <Link href="#">Corporate Information</Link>
              </div>
              <div className="col-12 col-md-3 text-center">
                <Link href="#">Subscribe to our newsletter</Link>
                <Link href="#">The latest news, articles, and resources, sent to your inbox weekly</Link>
                <Link href="#">  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter your email"
              className="me-2"
              aria-label="Search"
            />
            <Button className="p-2" variant="danger">Subscribe</Button>
          </Form></Link>
                
              </div>
              
            </div>
            <hr className="ms-5 me-5" />
            <p className="ms-5 mt-4">© 2022 DreShop All rights reserved.</p>
          </div>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button className='sticky-bottom ms-5  rounded-circle' variant="danger"><ion-icon size="large" name="chatbubble"></ion-icon></Button>
  </OverlayTrigger>
    </>
    )
}
export default Footers;
