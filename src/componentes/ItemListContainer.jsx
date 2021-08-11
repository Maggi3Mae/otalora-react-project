import React from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import Clase from './Clase';
import {getFirestore} from '../services/FirebaseService'
import {useParams} from 'react-router-dom'


//importo el array y la promesa desde el mock
function ItemListContainer() {  
    const { categoryId } = useParams()
    const [gameItems, setGameItems] = useState([])    
    useEffect(() => {      
       

         if (categoryId===undefined) { //acá le digo que si es indefinido el parametro de la url cargue todo
            const dbQuery = getFirestore()
            dbQuery.collection('gameList').get()
            .then(resp => setGameItems(resp.docs.map(i => ({...i.data(), id:i.id}))))            
            .catch((err)=> {
                console.log(err);
            })           
            
        }  else { //y acpa que si no lo es que me cargue los de la categoría
            const dbQuery = getFirestore()
            dbQuery.collection('gameList').where('category','==', categoryId).get()
            .then(resp => setGameItems(resp.docs.map(i => ({...i.data(), id:i.id}))))
            .catch((err)=> {
                console.log(err);
            })
        }                         
    }, [categoryId])
    console.log(gameItems);
    return (
        <Container>
            {/* acá empieza el item list*/}
            <ItemList gameArray={gameItems}/>
            {/* esto es para los ejercicios de las clases*/}
            {/* <Clase />  */}
        </Container> 
    )
}

export default ItemListContainer
