import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import { getItems } from '../services/getItems';

function ItemDetailContainer() {
        //acá uso el mock para que todo el array quede en 1 solo archivo y lo importo arriba
        const [gameItems, setGameItems] = useState([])
        useEffect(() => {
                getItems()
                .then((result)=>{
                    setGameItems(result)
                    console.log("cargo el detalle a los 2 seg");
                })
                .catch((err)=> {
                    console.log(err);
                })        
        }, [])
        //acá traigo solo 1 elemento del array con el metodo filer y lo guardo en una nueva constante, itemGame
        //tengo que usar el metodo filter para que me genere un array,si uso find no me funciona porque me bota un objeto
        const itemGame = gameItems.filter(gameItems => gameItems.id === 3); //si cambio acá el id se carga otro juego
        console.log(itemGame)
    return (
        <Container>
            <ItemDetail item={itemGame} />
        </Container> 
    )
}

export default ItemDetailContainer
