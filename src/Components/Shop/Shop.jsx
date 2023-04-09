import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const [cart,setCart]=useState([]);

 
    useEffect(()=>{
    const savedCart=[];
         const storedCart=getShoppingCart();
         for(const id in storedCart)
         {
            const addedCart=products.find(product=>product.id===id);
            if(addedCart)
            {
                const quantity=storedCart[id];
                addedCart.quantity=quantity;
                savedCart.push(addedCart);
            }
         }   
         setCart(savedCart);

    },[products]);


    const addToCart=(product)=>{
        console.log(cart)
        // console.log(product)
        // const newCart=[...cart,product];
        // if product does not exist in the cart ,then set quantity 1
        // if product exist in the cart update the quantity by 1 
        let newCart=[];
        const exist=cart.find(pd=>pd.id===product.id);
        if(!exist)
        {
            product.quantity=1;
            newCart=[...cart,product];
        }
        else{
            exist.quantity=exist.quantity+1;
            const remaining=cart.filter(pd=>pd.id!==product.id);
            newCart=[...remaining,exist];
        }
        
            
    
        setCart(newCart);
        addToDb(product.id)
    };
    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop'>
           <div className="product-container">
         
           {
                products.map(product=><Product product={product} key={product.id}
                addToCart={addToCart}></Product>)
            }
           </div>
           <div className="cart-container">
           <Cart cart={cart}
           handleClearCart={handleClearCart}>
            <Link to='/order' className='proceed-link'>
            <button className='proceed-btn'><span>Review Order</span>
             <FontAwesomeIcon className='proceed-icon' icon={faArrowRight} /></button>
            </Link>
           </Cart>
           </div>
        </div>
    );
};

export default Shop;