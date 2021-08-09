import { Container } from "react-bootstrap"
import {useContext, useState,useEffect} from 'react'
import {CartContext} from './../context/cartContext';
import {Card, Button} from 'react-bootstrap'

function Cart() {
    const {cart, setCart} = useContext(CartContext)
    
    const [cartLength, setCartLength] = useState(false) 
    const [totalCart, setTotalCart] = useState(0)
    //const [newCart, setNewCart] = useState(cart)
   // console.log(newCart);
    const delteGame = (game) => {
        let index = cart.findIndex(i=>i.item.id === game.item.id)
        cart.splice(index,1)
                  setCart([...cart])   
                }
    useEffect(() => {          
        setTotalCart( //con esto creo une nuevo array con solo los valores
            cart.map((game) => {
                let value = game.quantity*game.item.price
                return value
            }
            
        ))      
         
        if (cart.length>0) { //con esto determino si hay items en el carritos para saer que mostrar
            setCartLength(true)
        }
    }, [cart])
    

    return (
        <div>
            
                <Container className="cart">

                   {cartLength?<h1 className="mt-5" style={{color: "white"}}>Tu orden</h1> : <h1>El carrito esta vacío</h1>}

                        {cart.map((game) => (                        
                        <Card className="mb-4">
                            <Card.Img variant="top" src={game.item.picUrl} />
                            <Card.Body className="row">
                                <div className="details">
                                <h5>{game.item.title}</h5>
                                <p>Cantidad: {game.quantity}</p>
                                <Button onClick={()=>delteGame(game)} variant="danger"><i class="fas fa-trash-alt"></i></Button>
                                </div>
                                
                                <div className="price">
                                    <p class="small">${game.item.price} C/U</p>                                   
                                    <p>Total ${game.item.price*game.quantity}</p>
                                </div>

                            </Card.Body>
                        </Card>
                    ))}
                    {cartLength? <p style={{color: "white", textAlign:"right"}}>Total a pagar ${totalCart.reduce(function(a, b){ return a + b; })}</p> : undefined}
                </Container>
        </div>
    )
}

export default Cart
