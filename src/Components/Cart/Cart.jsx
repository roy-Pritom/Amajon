import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart=props.cart; option 1
    // const {cart}=props; option n2
    let quantity=0;
    let totalPrice=0;
    let totalShippingCharge=0;
    // console.log(cart)
    for(const element of cart)
    {
        if(element.quantity===0)
        {
            element.quantity=1;
        }

        totalPrice+=element.price*element.quantity;
        totalShippingCharge+=element.shipping;
        quantity=quantity+element.quantity;
    }
    // 7% tax
    let tax=totalPrice*7/100;
    const grantTotal=totalPrice+totalShippingCharge+tax;
    return (
        <div className='cart'>
            <h3 style={{textAlign:"center"}}>Order Summary</h3>
            <h4>Selected items : {quantity}</h4>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShippingCharge.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grantTotal.toFixed(2)}</h4>
           
        </div>
    );
};

export default Cart;