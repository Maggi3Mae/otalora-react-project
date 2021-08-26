import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getFirestore} from '../services/FirebaseService'
import ItemCount from './ItemCount'
import ProductNotFound from './ProductNotFound'
import GameItem from './GameItem'
import {Spinner} from 'react-bootstrap'

function Detail() {
  
   const { detailId } = useParams() //esto me toma el valor después de / en la url u lo guarda en la constante detailId
    const [item, setItems] = useState({})
    const [display, setDisplay] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {  
        if (item.title===undefined) {       
            setDisplay(false)     
        } else {
        setDisplay(true)
      }    
      const dbQuery = getFirestore()
      dbQuery.collection('gameList').doc(detailId).get() //acá me traigo solo un documento
      .then(resp => setItems({...resp.data(), id:resp.id}))    //con esto lo dejo como un lindo array
      .catch((err)=> {
          console.log(err);
      }) 
      .finally(
          (setTimeout(() => {
            setLoading(true)
          }, 500))
      )
      
    }, [detailId, item])
    
    return (
        
        <>         
        {display?
        <> 
            <GameItem item={item} />
            <ItemCount stock={item.stock} />  
        </> 
        :
        <>
            {loading?
                <ProductNotFound /> 
            :
            <Spinner animation="border" variant="light" />
            }        
        </>          
        }
        </>
    )
}

export default Detail
