import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';


function Home() {
  const [index, setIndex] = useState(0);
 
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height={'650px'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='fs-1'>NEW SEASON ARRIVALS</h3>
          <h4>CHECK OUT ALL THE TRENDS.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1661281362580-95188f976fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height={'650px'}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='fs-1'>NEW SEASON ARRIVALS</h3>
          <h4>CHECK OUT ALL THE TRENDS.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=600" height={'650px'}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='fs-1'>NEW SEASON ARRIVALS</h3>
          <h4>CHECK OUT ALL THE TRENDS.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Products/>
    </div>
  );
}

export default Home;