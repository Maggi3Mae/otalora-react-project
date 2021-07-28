import {  useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {

    return (
        <Container fluid className="detail p-0 m-0">            
            <ItemDetail />
        </Container> 
    )
}

export default ItemDetailContainer
