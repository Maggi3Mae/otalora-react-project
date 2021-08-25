import React, {useState, useContext} from 'react'

import {Form, Button} from 'react-bootstrap'
import {getFirestore} from '../services/FirebaseService'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {CartContext} from './../context/cartContext';

 
function FormPurchase({cart, totalCart, setShowPurchase}) {
    const {setCart} = useContext(CartContext)   
    const [buyer, setBuyer] = useState(intitalState)
    const [loading, setLoading] = useState(false)
    const handleChange =(e)=> {
        setBuyer({
          ...buyer, [e.target.name]: e.target.value                
        })
    }
    const [id, setId] = useState()
    const order = {buyer ,item:cart, total: parseInt(totalCart.toString()), date: firebase.firestore.Timestamp.fromDate(new Date())}
    const handleSubmit =(e)=> {
        e.preventDefault()
        const db = getFirestore()
        db.collection('order').add(order)
        .then(resp=>setId(resp.id))
        .catch(err=>console.log(err))
        .finally(
            setLoading(true)
        )
    }
    const handleDeleteCart =()=> {
        setShowPurchase(true)
        setCart([])
    }
    return (
       
    <>
        {loading? 
        <p style={{color:"white"}}>Muchas gracias por su compra, quedó registrada con el id <b>{id}</b> </p>
        :
        <Form className="formPurchase" onChange={handleChange} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" name='nombre' value={buyer.name} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="phone" placeholder="Teléfono" name='telefono'  value={buyer.phone} />
            </Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Correo" name='correo'  value={buyer.email}/>
            <Button onClick={()=>handleDeleteCart()} variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
        }
        
    </>
          
        
    )
}

export default FormPurchase
const intitalState = {
    nombre:'',
    telefono:'',
    correo:''
}