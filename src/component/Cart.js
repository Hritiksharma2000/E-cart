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

const CartPage = (cart) => {

  const [cartItems, setCartItems] = useState([]);

  const removeItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          ))}
          <h2>Total: {calculateTotal()}</h2>
        </div>
      ) : (
        <p>Your cart {cart.length} is empty</p>
      )}
    </div>
  );
};

export default CartPage;
