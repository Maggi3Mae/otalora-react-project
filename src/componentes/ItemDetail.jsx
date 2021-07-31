import {useState } from 'react'
import Detail from './Detail'
import ItemCount from './ItemCount'


function ItemDetail() {

  const [cartFull, setCartFull] = useState(false) //le indico al botón que el carro tiene productos
  const handleCount = () => { 
      setCartFull(true) // en el clic seteo que tiene productos con un verdadero
    };

  //acá lo mapeo
  return (
    <>
        <Detail />
        <ItemCount  onAdd={handleCount} cartFull={cartFull}  />    
    </>
  ) 
}

export default ItemDetail;