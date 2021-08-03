import { Container } from "react-bootstrap"
import {useContext} from 'react'
import {CartContext} from './../context/cartContext';

function Cart() {
    const {cart} = useContext(CartContext)
    console.log(cart);
    return (
        <div>
            
                <Container>
                    <h1 className="mt-5" style={{color: "white"}}>Estas entrando a mi cart pero esta en construcción</h1>
                        {cart.map((obj) => (
                        <li style={{color: "white"}}>
                            <span  key={obj.item.id}>{obj.item.title}</span> |
                            <span> {obj.quantity}</span>
                        </li>
                    ))}
                </Container>
        </div>
    )
}

export default Cart
