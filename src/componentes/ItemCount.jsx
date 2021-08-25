import React, {useState, useContext} from 'react'
import { Card } from 'react-bootstrap'
import {Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {CartContext} from './../context/cartContext';
import {useParams} from 'react-router-dom'

function ItemCount({stock=10, initial=1, onAdd, cartFull}) {
    const { detailId } = useParams() //con esto uso el params para detercar el id del detalle y7 con el metodo find
    //context
    const {addToCart} = useContext(CartContext)
    //context
    //contador
    const [amount, setAmount] = useState(initial)
    const handleAdd = () =>{
        if (amount<stock){
            setAmount(amount+1)//esto aumento la variale que miestra la cantidad
        }
    }
    const handleRemove = () =>{
        if (amount>initial){
            setAmount(amount-1) //esto reduce la variable que muiestra la cantidad
        }
    }
    let minus = document.getElementById("delete"); //con esto me aseguro que el usuario no puede agregar más items después de agregar al carrito
    let add = document.getElementById("add");
    if (cartFull === true) {
        minus.style.display = "none";
        add.style.display = "none";
    }
    //contador
    
    
     return (
        <Container>
            <Card className="offset-md-4 col-md-4 ">
               <Card.Body>
                   <div className="d-flex flex-row justify-content-between mb-4 align-items-center">
                    <Button id="delete" onClick={handleRemove} variant="outline-danger" className="mr-2 ">
                        <i className="fas fa-minus"></i>
                    </Button>
                    <label type="text" style={{width: "100%",textAlign: "center",fontWeight:"bold"}}>{amount}</label>
                    <Button id="add" onClick={handleAdd} variant="outline-success" className="ml-2">
                        <i className="fas fa-plus"></i>
                    </Button>
                </div>
                   <Link to={`/cart`}><Button variant="success"  onClick={()=>addToCart(amount,detailId)} style={{width: "100%"}}>Agregar al carrito {amount} items </Button></Link>
                </Card.Body>
            </Card> 
        </Container>
    )
}

export default ItemCount
