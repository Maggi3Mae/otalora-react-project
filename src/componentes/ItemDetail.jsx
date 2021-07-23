import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

const handleCount =(amou)=> {
    alert(`Usted ha agregado ${amou} items al carrito`)
}

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
                                {/* acá empieza elcontador*/}
                                <ItemCount stock={10} initial={1} onAdd={handleCount}/>
                                </div>
                            </div>       
                        </Card>             
                    ))}
            </>
        )
}

export default ItemDetail
