import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import Clase from './Clase';
import { getItems } from '../services/getItems';


const handleCount =(amou)=> {
    alert(`Usted ha agregado ${amou} items al carrito`)
}
//importo el array y la promesa desde el mock
function ItemListContainer({greeting}) {
    const [gameItems, setGameItems] = useState([])
    useEffect(() => {
            getItems()
            .then((result)=>{
                setGameItems(result)
                console.log("Cargo cards a los 2 sg");
            })
            .catch((err)=> {
                console.log(err);
            })        
    }, [])
    return (
        <Container>
            {[
            'warning',
            ].map((variant, idx) => (
            <Alert className="mt-5" key={idx} variant={variant}> 
                {greeting}
            </Alert>
            ))}
            {/* acá empieza elcontador*/}
            <ItemCount stock={10} initial={1} onAdd={handleCount}/>
            {/* acá empieza el item list*/}
            <ItemList gameArray={gameItems}/>
            {/* esto es para los ejercicios de las clases*/}
            <Clase /> 
        </Container> 
    )
}

export default ItemListContainer
