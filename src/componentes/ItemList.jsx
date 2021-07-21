import React from 'react'
import Item from './Item'

function ItemList({gameArray}) {
    
    //acá se llama el map de los elementos
    //le puse un key para que no saliera un error en consola :p pero no se para que sirve jajaaj
    return (      
        <div className="item-list row mt-5">
            {gameArray.map((obj, key) => (
                <Item item={obj} key={key} />
            ))}
        </div>
    )
}

export default ItemList
