import { getShoppingCart } from "../../utilities/fakedb";

const cartLoader=async()=>{

    const res=await fetch('products.json')
   const products=await res.json()
//    console.log(data)
const storedCart=getShoppingCart();

// console.log(storedCart)
const saveCart=[];
for(const id in storedCart)
{
    const addedCart=products.find(product=>product.id===id);
    if(addedCart)
    {
      const quantity=storedCart[id];
      addedCart.quantity=quantity;
      saveCart.push(addedCart);

    }
}
  
   return saveCart;
}
export {cartLoader};