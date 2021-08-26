
import {useContext, useState,useEffect} from 'react'
import {CartContext} from './../context/cartContext';
import {Card, Button, Container} from 'react-bootstrap'
import FormPurchase from './FormPurchase'

function Cart() {
    const {cart, setCart} = useContext(CartContext)    
    const [cartLength, setCartLength] = useState(false) 
    const [totalCart, setTotalCart] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [showPurchase, setShowPurchase] = useState(false)
   //console.log(totalCart);
    const delteGame = (game) => {
        let index = cart.findIndex(i=>i.item.id === game.item.id)
        cart.splice(index,1)
        setCart([...cart])   
        setCartLength(false)
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


    }, [cart, cartLength])
    return (
        <div>            
                <Container className="cart">

                   {cartLength?<h1 className="mt-5" style={{color: "white"}}>Tu orden</h1> : <h1 style={{color: "white"}}  className="mt-5">El carrito esta vacío</h1>}

                        {cart.map((game) => (                        
                        <Card className={`mb-4 ${showPurchase ? "d-none" : undefined} `} key={game.item.id}>
                            <Card.Img variant="top" src={game.item.picUrl} alt={`Portada de ${game.item.title}`} />
                            <Card.Body className="row">
                                <div className="details">
                                <h5>{game.item.title}</h5>
                                <p>Cantidad: {game.quantity}</p>
                                <Button onClick={()=>delteGame(game)} variant="danger"><i className="fas fa-trash-alt"></i></Button>
                                </div>
                                
                                <div className="price">
                                    <p className="small">${game.item.price} C/U</p>                                   
                                    <p>Total ${game.item.price*game.quantity}</p>
                                </div>

                            </Card.Body>
                        </Card>
                    ))}
                    {cartLength? 
                    <>
                        <h3 className={`mb-4 ${showPurchase ? "d-none" : "d-block"} `} style={{color: "white", textAlign:"right"}}>Total a pagar {showPurchase ? undefined : <b>${totalCart.reduce(function(a, b){ return a + b; }) }</b>}</h3>
                        <Button variant="success" className={`mb-4 ${showPurchase ? "d-none" : "d-block"} `} onClick={()=>setShowForm(true)}>Terminar compra</Button>
                        {showForm?
                            <FormPurchase cart={cart} totalCart={totalCart} setShowPurchase={setShowPurchase}/>
                            :
                            undefined
                        }
                        
                     </>
                     : 
                     undefined}
                    

                </Container>
        </div>
    )
}

export default Cart
