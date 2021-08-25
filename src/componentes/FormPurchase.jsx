import React, {useState, useContext, useEffect} from 'react'

import {Form, Button} from 'react-bootstrap'
import {getFirestore} from '../services/FirebaseService'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {CartContext} from './../context/cartContext';



 
function FormPurchase({cart, totalCart, setShowPurchase}) {
    const {setCart} = useContext(CartContext)   
    const [buyer, setBuyer] = useState(intitalState)
    const [validation, setValidation] = useState(false)
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

    useEffect(() => {
        let nombre = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let emailConfirmation = document.getElementById('email-confirmation').value;
        if(nombre.length>0 && email.length>0  && phone.length>0 && emailConfirmation.length>0 && email===emailConfirmation )   {
            setValidation(true)
        }
        else {
            setValidation(false)
        }        
    }, [buyer])   
    
    return (
       
    <>
        {loading? 
        <p style={{color:"white"}}>Muchas gracias por su compra, quedó registrada con el id <b>{id}</b> </p>
        :
        <Form className="formPurchase" onChange={handleChange} onSubmit={validation ? handleSubmit : undefined}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control id="name" type="text" placeholder="Nombre" name='nombre' value={buyer.name} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control id="phone" type="phone" placeholder="Teléfono" name='telefono'  value={buyer.phone} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Correo</Form.Label>
                <Form.Control id="email" type="email" placeholder="Correo" name='correo'  value={buyer.email} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Confirme su correo</Form.Label>
                <Form.Control id="email-confirmation" type="email" placeholder="Ingrese nuevamente su correo" name='confirmar correo' required />
            </Form.Group>
               
          {validation? 
          <Button   onClick={()=>handleDeleteCart()} variant="primary" type="submit">Enviar
          </Button>
          :
          <Button className="disabled" disabled variant="primary" type="submit">Enviar
          </Button>
          }
                
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

