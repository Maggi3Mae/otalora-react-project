import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {getFirestore} from '../services/FirebaseService'
import firebase from 'firebase'
import 'firebase/firestore'
function FormPurchase({cart, totalCart}) {
    const [buyer, setBuyer] = useState(intitalState)
    const handleChange =(e)=> {
        setBuyer({
          ...buyer, [e.target.name]: e.target.value    
            
        })
    }
    const order = {buyer ,item:cart, total: parseInt(totalCart.toString()), date: firebase.firestore.Timestamp.fromDate(new Date)}
    const handleSubmit =(e)=> {
        e.preventDefault()
        const db = getFirestore()
        db.collection('order').add(order)
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
    }

    console.log(order);
    return (
        <>
          <Form className="formPurchase" onChange={handleChange} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" name='nombre' value={buyer.name} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="phone" placeholder="teléfono" name='Telefono'  value={buyer.phone} />
            </Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="correo" name='Correo'  value={buyer.email}/>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
        </>
    )
}

export default FormPurchase
const intitalState = {
    nombre:'',
    telefono:'',
    correo:''
}