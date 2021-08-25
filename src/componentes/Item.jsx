import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//acá se da forma al componente
const Item = ({item}) => {  
    return (
        <div className="col-sm-6 mb-4 col-lg-3">
            <Card  id={item.id} style={{height:"100%"}} >
            <Link to={`/detail/${item.id}`}>
                <Card.Img variant="top" src={item.picUrl}/>
                <i className="fas fa-plus list"></i>
            </Link>
            </Card>
        </div>
    )
}
export default Item