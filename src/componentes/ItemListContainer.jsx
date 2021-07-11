import React from 'react'
import { Alert } from 'react-bootstrap'

function ItemListContainer({greeting}) {
    return (
        <>
            {[
            'warning',
            ].map((variant, idx) => (
                //porfa ignora esas key y eso es que la documentación de react-bootstrap lo coloca así :p
            <Alert className="mt-5" key={idx} variant={variant}> 
                {greeting}
            </Alert>
            ))}
        </>
    )
}

export default ItemListContainer
