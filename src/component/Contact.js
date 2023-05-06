import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aeremcss.css';
import Footers from './Footers';
function Contact() {
  return (
    <div>
        <div>
      <div className='bg-light py-5 text-center'>
        <h4>Get in touch</h4>
      </div>
      <div className='row  m-0 p-0'>
        <div className='col-md-5 mx-auto mt-5'>
            <div className='ms-5 me-5 data3div'>
                <h2>Let's work together</h2>
                <p>We’d love to hear from you! Send us a message using the form below, or email us. We’d love to hear from you!</p>
                <h5>DreShop Solutions Private Limited</h5>
                <p>CIN: U74110MH2018PTC313493</p>
                <p>91 Springboard, Godrej and Boyce, Gate No 2</p>
                <p>Vikhorli West Mumbai Maharashtra 400079</p>
                <p><span className='me-3 mt-3'><ion-icon name="mail-outline"></ion-icon></span><span>connect@DreShop.co</span></p>
                <p><span className='me-3 mt-3'><ion-icon name="call-outline"></ion-icon></span><span>+91 8104279409</span></p>
                <h5>DreShop Finance Private Limited</h5>
                <p>CIN: U65990MH2019PTC329440</p>
                <p>91 Springboard, Godrej and Boyce, Gate No 2</p>
                <p>Vikhorli West Mumbai Maharashtra 400079</p>
                <p><span className='me-3 mt-3'><ion-icon name="mail-outline"></ion-icon></span><span>loans@DreShop.co</span></p>
                <p><span className='me-3 mt-3'><ion-icon name="call-outline"></ion-icon></span><span>+91 8104279409</span></p>
                <h5>Grievance Redressal</h5>
                <p><span className='me-3 mt-3'><ion-icon name="call-outline"></ion-icon></span><span>+91 8104279409</span></p>
                <p><span className='me-3 mt-3'><ion-icon name="mail-outline"></ion-icon></span><span>grievance@DreShop.co</span></p>
                <h5>NACH Cancellation Request</h5>
                <p><span className='me-3 mt-3'><ion-icon name="call-outline"></ion-icon></span><span>+91 8104279409</span></p>
                <p><span className='me-3 mt-3'><ion-icon name="mail-outline"></ion-icon></span><span>loans@DreShop.co</span></p>
                <h5>Support</h5>
                <p><span className='me-3 mt-3'><ion-icon name="mail-outline"></ion-icon></span><span>connect@DreShop.co</span></p>
                <h5>Careers Link</h5>
                <p><span className='me-3 mt-3'><ion-icon name="mail-outline"></ion-icon></span><span>hr@DreShop.co</span></p>
            </div>
        </div>
        <div className='col-md-6 mx-auto'>
        <img src="https://www.aerem.co/images/contact.jpg" width={'100%'} height={'100%'} alt="" />
        </div>
      </div>
    </div>
    <Footers/>
    </div>
  )
}

export default Contact;
