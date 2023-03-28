import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
        setCart(newCart);
        addToDb(product.id)
    };
    const savedCart=[];
    useEffect(()=>{
        const storedCart=getShoppingCart();
        // console.log(storedCart)
        for(const id in storedCart)
        {
            // console.log(id)
            const addedCart=products.find(product=>product.id===id);
            // console.log(cart)
            if(addedCart)
            {
                const quantity=storedCart[id];
                addedCart.quantity=quantity;
                savedCart.push(addedCart);
            }
            // console.log(cart)
            console.log(savedCart);
            setCart(savedCart);
        }
    },[products])

    return (
        <div className='shop'>
           <div className="product-container">
         
           {
                products.map(product=><Product product={product} key={product.id}
                addToCart={addToCart}></Product>)
            }
           </div>
           <div className="cart-container">
           <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;