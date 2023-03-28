import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        // console.log(product)
        const newCart=[...cart,product];
        setCart(newCart)
    }

    return (
        <div className='shop'>
           <div className="product-container">
         
           {
                products.map(product=><Product product={product} key={product.id}
                addToCart={addToCart}></Product>)
            }
           </div>
           <div className="">
           <h1>Order</h1>
           <h2>Cart : {cart.length}</h2>
           <h3>Add Cart</h3>
           </div>
        </div>
    );
};

export default Shop;