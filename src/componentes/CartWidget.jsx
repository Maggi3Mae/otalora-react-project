import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import {CartContext} from './../context/cartContext';

function CartWidget() {
    const {cart} = useContext(CartContext)
    console.log(cart);
    return (
        <div className="ml-3">
           {cart.length>0?
           <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
           :
           undefined} 
        </div>
    )
}
export default CartWidget