import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
  const addToCart=props.addToCart;
    const { name, price, ratings, seller, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <div className="rating">
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>
                </div>

            </div>
            <button className='add-btn' onClick={()=>addToCart(props.product)}>Add to Cart
            <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;