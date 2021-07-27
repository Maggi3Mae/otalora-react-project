 

/*
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

function Clase () {
/* function handle (e) {
    console.log(e.target.value) //con esto me muestra el valor del input
    //e.preventDefault() esto detiene el evento por defecto
} */
   
    const handleKey = (e) => { //así evito que se ingrese la letra a
        if(e.key==='a') {
            e.preventDefault()
        }   
        if(e.key==='e') {
            e.preventDefault()
        } 
        console.log(e.key);     
    }
    
    return (
        <div>
          <input onKeyDown = {handleKey} ></input>
        </div>
    )
}

export default Clase

