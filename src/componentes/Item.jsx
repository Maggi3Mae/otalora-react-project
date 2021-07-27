import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//acá se da forma al componente
const Item = ({ item }) => { { 

    return (
        <div className="col-sm-3 mb-4">
            <Card  id={item.id} style={{height:"100%"}} >
            <Link to={`/detail/${item.id}`}>
                <Card.Img variant="top" src={item.picUrl}/>
            </Link>
            <Card.Body className="d-flex justify-content-between flex-column">
                <div> {/*este div es solo para que el botón me quede al final de la caja con flex*/}
                <Card.Title>
                    <h4>{item.title}</h4>
                </Card.Title>
                <Card.Text>
                    <h5>${item.price} COP</h5>
                </Card.Text>
                </div>
                <Link to={`/detail/${item.id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
            </Card>
        </div>
    )
}
}

export default Item