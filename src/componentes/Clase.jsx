/* import React, { useEffect, useState } from 'react'


function Clase() {
 const [Pokemon, setPokemon] = useState([]) //esto tiene que ser un array!
    useEffect(() => {
       
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(data=> data.json())
        .then(res =>setPokemon(res.results)) //entro a results

    }, [
        
    ])
    console.log(Pokemon) //lo coloco en consola

    //mapeo el array
    return (
        <div>
                {Pokemon.map(obj => (                 
                <div className="card">
                    <li>{obj.name}</li> 
                    </div>
                ))}
        </div>
    )
}

export default Clase */
import React from 'react'

function Clase() {
    return (
        <div>
            
        </div>
    )
}

export default Clase

