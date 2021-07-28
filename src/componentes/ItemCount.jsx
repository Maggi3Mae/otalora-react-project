import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import {Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function ItemCount({stock=10, initial=1, onAdd, cart}) {
    const [amount, setAmount] = useState(initial)
    const handleAdd = () =>{
        if (amount<stock){
            setAmount(amount+1)
        }
    }
    const handleRemove = () =>{
        if (amount>initial){
            setAmount(amount-1)
        }
    }
    let minus = document.getElementById("delete"); //con esto me aseguro que el usuario no puede agregar más items después de agregar al carrito
    let add = document.getElementById("add");
    if (cart === true) {
        minus.style.display = "none";
        add.style.display = "none";
    }
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
                { //acá uso un if terniario para validar, si es falso me muestra agregar al carrito, si es verdadero me muestra el terminar la compra
                    cart ? 
                    <Link to={`/cart`}><Button variant="warning" style={{width: "100%"}}>Ver carrito ( <b>{amount}</b> ) items </Button></Link>
                    :
                    <Button variant="success" onClick={()=>onAdd(amount)} style={{width: "100%"}}>Agregar al carrito {amount} items </Button>
                }
                </Card.Body>
            </Card> 
        </Container>
    )
}

export default ItemCount
