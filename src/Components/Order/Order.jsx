import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../Review-item/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart=useLoaderData()
    // console.log(saveCart)
    
    const [cart,setCart]=useState(saveCart);
    const handleRemoveFromCart=(id)=>{
     const remaining=cart.filter(pd=>pd.id!==id)
     setCart(remaining)
     removeFromDb(id)
    // console.log(cart)
    };
    
    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop'>
        <div className="review-container">
        {
            cart.map(product=><ReviewItem
            product={product}
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewItem>)
        }
        
        </div>
        <div className="cart-container">
          <Cart cart={cart}
          handleClearCart={handleClearCart}
       >
            <Link to='/checkout' className='proceed-link'>
            <button className='proceed-btn'><span>Proceed Checkout</span>
             <FontAwesomeIcon className='proceed-icon' icon={faCreditCard} /></button>
        </Link>
       </Cart>
        </div>
     </div>
    );
};

export default Order;