import React from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import Clase from './Clase';
import { getItems } from '../services/getItems';
import {useParams} from 'react-router-dom'

//importo el array y la promesa desde el mock
function ItemListContainer() {  
    const { categoryId } = useParams()
    const [gameItems, setGameItems] = useState([])    
    useEffect(() => {
        if (categoryId===undefined) { //acá le digo que si es indefinido el parametro de la url cargue todo
            getItems()
            .then((result)=>{
                setGameItems(result)
                console.log("Cargo cards a los 2 sg");
            })
            .catch((err)=> {
                console.log(err);
            }) 
        }  else { //y acpa que si no lo es que me cargue los de la categoría
            getItems()
            .then((result)=>{
                setGameItems(result.filter(it => it.category === categoryId))
                console.log("cargo las ategorías");
            })
            .catch((err)=> {
                console.log(err);
            }) 
        }                          
    }, [categoryId])
    //console.log(categoryId)
    return (
        <Container>
            {/* acá empieza el item list*/}
            <ItemList gameArray={gameItems}/>
            {/* esto es para los ejercicios de las clases*/}
            <Clase /> 
        </Container> 
    )
}

export default ItemListContainer
