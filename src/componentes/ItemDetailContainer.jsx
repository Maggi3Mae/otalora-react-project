import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import { getItems } from '../services/getItems';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
        const { detailId } = useParams()

        //acá uso el mock para que todo el array quede en 1 solo archivo y lo importo arriba
        const [gameItems, setGameItems] = useState([])
        useEffect(() => {
                getItems()
                .then((result)=>{
                    setGameItems(result)
                   // console.log("cargo el detalle a los 2 seg");
                })
                .catch((err)=> {
                    console.log(err);
                })        
        }, [detailId])
   // console.log(detailId)

        //acá traigo solo 1 elemento del array con el metodo filer y lo guardo en una nueva constante, itemGame
        //tengo que usar el metodo filter para que me genere un array,si uso find no me funciona porque me bota un objeto
        const itemGame = gameItems.filter(gameItems => gameItems.id === detailId); //acá coloco un filtro para que solo me traiga u  juego
        

    return (
        <Container>            
            <ItemDetail item={itemGame}  />
        </Container> 
    )
}

export default ItemDetailContainer
