// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useSelector } from 'react-redux';
// function Cart() {
//     const cart=useSelector(state=>state.cart)
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//       <div><p className="bg-primary">{cart.length}</p></div>
//     </Card>
//   );
// }

// export default Cart;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector(state => state.cart)

  const [cartItems, setCartItems] = useState(cart);

  const removeItem = (item) => {
    // const updatedCartItems = cart.remove(cart, cartItems.filter((cartItem) => cartItem.id !== item.id))
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price* item.qty;
    });
    return total;
  };

  return (
    <div>      

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div className="d-flex mt-5 border-bottom border-5 border-light justify-content-between bg-light">
            <div  key={item.id}>
            <div className="d-flex py-1 ms-5">
                <img src={item.image} alt="cartproduct" width="45px"/>
                <div>
                    <p className="m-0 ms-2" style={{'fontSize':'12px'}}>Step : {item.title.substring(0,12)}.</p>
                    <p className="m-0 ms-2 mt-1"   style={{'fontSize':'15px' , 'fontWeight':'500'}}>Price : {item.price}$</p>
                </div>
            </div>
            </div>
            <button onClick={() => removeItem(item)} className="btn bg-primary  border rounded-1 filterbtn me-5" style={{'alignSelf':'center'}}>Remove</button>
        </div>
          ))}
           <div className="d-flex mt-5 border-bottom border-5 border-light justify-content-between bg-light">
            <div className="py-1 ms-5">
                <h5 className="text-primary">Total</h5>
                
            </div>
            <div><h5  className="me-5 text-primary">{calculateTotal()}</h5></div>
            </div>
        </div>
      
      ) : (
        <div>
          <Card className="text-center">

            <Card.Body>
              <Card.Title><img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt='cartimage' height='200px' width='200px' /></Card.Title>
              <Card.Text>
                <h4 className="fw-400"> Your cart is empty!</h4>
                <p>Add items to it now.</p>
              </Card.Text>
              <Link to='/products' className="btn bg-primary btn-outline-dark border rounded-0 filterbtn">
                Shop now
              </Link>

            </Card.Body>

          </Card>
        </div>
      )}
    </div>
  );
};

export default CartPage;
