import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import {CartContext} from './../context/cartContext';

function CartWidget() {
    const [display, setDisplay] = useState(false)
    const {cart} = useContext(CartContext)
    useEffect(() => {
        if (cart.length===0) {
            setDisplay(true)
        }else {
            setDisplay(false)
        }
    }, [cart])
    return (
        <div className="ml-3 cartWidget">
           
           <Link to="/cart"><span className={`"numberItems" ${display?"d-none": "d-block"}`}>{cart.length}</span><i className="fas fa-shopping-cart"></i></Link>
           
        </div>
    )
}
export default CartWidget