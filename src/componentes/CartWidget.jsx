import React from 'react';
import { Link } from 'react-router-dom'

function CartWidget() {
    return (
        <div className="ml-3">
            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        </div>
    )
}
export default CartWidget