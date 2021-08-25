import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import {CartContext} from './../context/cartContext';

function CartWidget() {
    const {cart} = useContext(CartContext)
    return (
        <div className="ml-3">
           
           <Link to="/cart"><span>{cart.length}</span><i className="fas fa-shopping-cart"></i></Link>
           
        </div>
    )
}
export default CartWidget