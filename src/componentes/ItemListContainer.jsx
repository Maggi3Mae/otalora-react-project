import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';



const handleCount =(amou)=> {
    alert(`Usted ha agregado ${amou} items al carrito`)
}



function ItemListContainer({greeting}) {
    const [gameItems, setGameItems] = useState([])
    useEffect(() => {
        const GameList = [
            {
                id: 1, 
                title: "The Witcher 3: Wild Hunt",
                price: 50000,
                picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
                gameUrl: "https://www.igdb.com/games/the-witcher-3-wild-hunt"
            },
            {
                id: 2, 
                title: "Metal Gear Solid 3: Snake Eater",
                price: 34500,
                picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co29pn.jpg",
                gameUrl: "https://www.igdb.com/games/metal-gear-solid-3-snake-eater"
            },
            {
                id: 3, 
                title: "Hades",
                price: 24000,
                picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.jpg",
                gameUrl: "https://www.igdb.com/games/hades--1"
            },
            {
                id: 4, 
                title: "Portal 2",
                price: 65000,
                picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rs4.jpg",
                gameUrl: "https://www.igdb.com/games/portal-2"
            }
            
        ];
            const promise = new Promise((resolve, reject) =>{
                setTimeout(() => {
                    resolve(GameList);
                },2000);
                //si cambio este timeout a menor tiempo, no carga nada y sale en consola el mensaje
                setTimeout(() => {
                    reject("No funciona, pero que triste eso")
                }, 3000);
            });
            promise
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
            <ItemList GameArray={gameItems}/>
        </Container>
    )
}

export default ItemListContainer
