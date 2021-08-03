import { Container } from "react-bootstrap"
import {useContext} from 'react'
import {CartContext} from './../context/cartContext';

function Cart() {
    const {cart} = useContext(CartContext)
    console.log(cart);
    return (
        <div>
            
                <Container>
                    <h1 className="mt-5" style={{color: "white"}}>Estas entrando a mi cart pero todavía no esta :(</h1>
                        {cart.map((obj) => (
                       <p style={{color: "white"}}>{obj.item}</p>
                    ))}
                </Container>
        </div>
    )
}

export default Cart
