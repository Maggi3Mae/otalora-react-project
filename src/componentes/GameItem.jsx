import React from 'react'
import { Container, Button } from "react-bootstrap";

function GameItem({item}) {

    return (
        <>         <div className="image" >
               <img src={item.backImg} alt={item.title}></img>
             </div>
             <Container >            
               <div className="text-wrapper row">
                   <div className="d-inline-flex flex-column cover-image">
                       <img src={item.picUrl} alt={item.title}></img>
                       <Button className="mt-3" variant="warning" onClick={()=>{window.history.back()}}>Regresar</Button>   
                   </div>
                   <div className="col">
                       <h1>{item.title}</h1>
                       <p>{item.sumary}</p>
                       <h3>Precio: ${item.price} COP</h3>                   
                   </div>
               </div>
               </Container>
        </>
    )
}

export default GameItem
