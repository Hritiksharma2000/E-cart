import React from 'react'
import Card from 'react-bootstrap/Card';
import Products from './Products';
// import image from 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

const Home = () => {
  return (
    <div className='hero'>
    <Card className="bg-dark text-white border-0">
      <Card.Img src='https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="Card image" height="750px" />
      <div className='card-img-overlay d-flex flex-column justify-content-center'>
        <div className="container">
       <h5 className="card-title display-3 fw-bolder mb-0 ">NEW SEASON ARRIVALS</h5>
        <p className="card-text lead fs-2">
          CHECK OUT ALL THE TRENDS
        </p>
        </div>
    
      </div>
    </Card>
    <Products/>
    </div>
  )
}

export default Home
