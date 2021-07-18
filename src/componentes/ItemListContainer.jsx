import React from 'react'
import { Alert, Container } from 'react-bootstrap';
import ItemCount from './ItemCount';

const handleCount =(amou)=> {
    alert(`Usted ha agregado ${amou} items al carrito`)
}

function ItemListContainer({greeting}) {
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
        </Container>
    )
}

export default ItemListContainer
