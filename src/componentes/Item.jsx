import React from 'react'
import { Button, Card } from 'react-bootstrap'


//acá se da forma al componente
const Item = ({ item }) => { {    
    return (
        <div className="col-sm-3 mb-4">
            <Card  id={item.id} style={{height:"100%"}} >
            <a href={item.gameUrl} target={"_blank"}>
                <Card.Img variant="top" src={item.picUrl}/>
            </a>
            <Card.Body className="d-flex justify-content-between flex-column">
                <div> {/*este div es solo para que el botón me quede al final de la caja con flex*/}
                <Card.Title>
                    <h4>{item.title}</h4>
                </Card.Title>
                <Card.Text>
                    <h5>${item.price} COP</h5>
                </Card.Text>
                </div>
                <Button variant="primary" target={"_blank"} href={item.gameUrl}>Ver más</Button>
            </Card.Body>
            </Card>
        </div>
    )
}
}

export default Item
