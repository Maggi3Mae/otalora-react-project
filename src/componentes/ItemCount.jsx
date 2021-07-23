import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function ItemCount({initial, stock, onAdd}) {
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
     return (
        <>
            <Card className="col-sm-8 mt-5">
               <Card.Body>
                   <div className="d-flex flex-row justify-content-between mb-4 align-items-center">
                    <Button onClick={handleRemove} variant="outline-danger" className="mr-2 ">
                        <i className="fas fa-minus"></i>
                        </Button>
                    <label type="text" style={{width: "100%",textAlign: "center",fontWeight:"bold"}}>{amount}</label>
                    <Button onClick={handleAdd} variant="outline-success" className="ml-2">
                        <i className="fas fa-plus"></i>
                    </Button>
                </div>
                <Button variant="success" onClick={()=>onAdd(amount)} style={{width: "100%"}}>Agregar al carrito {amount} items </Button>
                </Card.Body>
            </Card>                
        </>
    )
}

export default ItemCount
