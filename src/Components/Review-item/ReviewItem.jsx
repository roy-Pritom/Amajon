import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = (props) => {
    const {name,img,price,shipping,id}=props.product;
    const    handleRemoveFromCart=props.handleRemoveFromCart;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-item-info">
                <p className='item-title'>{id}</p>
                <p >Price :<span className='text-orange'>${price}</span></p>
                <p className='shipping-charge'>Shipping Charge : <span className='text-orange'>${shipping}</span></p>
            </div>
            <div className="">
                <button className='delete-btn' onClick={()=>handleRemoveFromCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;