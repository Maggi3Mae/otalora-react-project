import { Container } from 'react-bootstrap';
import React, {  useContext, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {getFirestore} from '../services/FirebaseService'
 //si se exporta por default va sin llaves y solo se puede uno



function ItemDetailContainer() {
    useEffect(() => {
        const dbQuery = getFirestore()
        console.log(dbQuery.collection('gameList'));
    }, [])

    return (
        <Container fluid className="detail p-0 m-0">            
            <ItemDetail />
        </Container> 
    )
}

export default ItemDetailContainer
