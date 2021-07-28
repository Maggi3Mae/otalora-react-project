import {useState} from 'react'
import Detail from './Detail'
import ItemCount from './ItemCount'



function ItemDetail() {
  const [totalItems, setTotalItems] = useState(1)  
  const [cart, setCart] = useState(false)
  const handleCount = (amou) => { 
      setTotalItems(amou)  //en amount guardo la cantidad de productos  
      setCart(true) 
    };
 
  //acá lo mapeo
  return (
    <>
      <Detail />
      <ItemCount  onAdd={handleCount} cart={cart} total={totalItems} />      
    </>
  ) 
}

export default ItemDetail;
