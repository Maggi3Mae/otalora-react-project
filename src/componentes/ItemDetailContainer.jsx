import { Container } from 'react-bootstrap';
import React, {  useContext } from 'react';
import ItemDetail from './ItemDetail';
 //si se exporta por default va sin llaves y solo se puede uno



function ItemDetailContainer() {

    return (
        <Container fluid className="detail p-0 m-0">            
            <ItemDetail />
        </Container> 
    )
}

export default ItemDetailContainer
