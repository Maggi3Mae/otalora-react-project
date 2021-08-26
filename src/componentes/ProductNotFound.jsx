import React from 'react'
import { Container } from 'react-bootstrap'
import error from "../images/game-over.png";

function ProductNotFound() {
    return (
        <div>
            <Container className="mt-5">
                <div className="not-found">
                    <img src={error} alt="mensaje de error"/>
                    <h1  className="mt-5">Lo sentimos, pero al parecer el juego que estas buscando ya no existe</h1>
                </div>
            </Container>
        </div>
    )
}

export default ProductNotFound
