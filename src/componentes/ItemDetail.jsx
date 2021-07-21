import React from 'react';
import { Card } from 'react-bootstrap';

function ItemDetail({item}) {
        //acá lo mapeo
        return (
            <>
                    {item.map(obj => (    
                        <Card className="detail">
                            <div className="image">
                                <img src= {obj.backImg}></img>                                
                            </div>   
                            <div className="text-wrapper row">
                                <div className="d-inline-flex">
                                <img src= {obj.picUrl}></img>
                                </div>
                                <div className="col">
                                <h1>{obj.title}</h1>
                                <p>{obj.sumary}</p>
                                <h3>Precio: ${obj.price} COP</h3>
                                </div>
                            </div>       
                        </Card>             
                    ))}
            </>
        )
}

export default ItemDetail
