import { Button, Container } from 'react-bootstrap'
import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getFirestore} from '../services/FirebaseService'
import ItemCount from './ItemCount'

function Detail() {
  
   const { detailId } = useParams() //esto me toma el valor después de / en la url u lo guarda en la constante detailId
    const [item, setItems] = useState({})
    const [display, setDisplay] = useState(false)
    useEffect(() => {      
      const dbQuery = getFirestore()
      dbQuery.collection('gameList').doc(detailId).get() //acá me traigo solo un documento
      .then(resp => setItems({...resp.data(), id:resp.id}))    //con esto lo dejo como un lindo array
      .catch((err)=> {
          console.log(err);
      })  
      if (item.title!=undefined) {
        setDisplay(true)
      } else {
        setDisplay(false)
      }
    }, [detailId])
    return (
        
        <>         
        {display?
        <> 
               <div className="image" >
               <img src={item.backImg} alt={item.title}></img>
             </div>
             <Container >            
               <div className="text-wrapper row">
                   <div className="d-inline-flex flex-column cover-image">
                       <img src={item.picUrl} alt={item.title}></img>
                       <Button className="mt-3" variant="warning" onClick={()=>{window.history.back()}}>Regresar</Button>   
                   </div>
                   <div className="col">
                       <h1>{item.title}</h1>
                       <p>{item.sumary}</p>
                       <h3>Precio: ${item.price} COP</h3>                   
                   </div>
               </div>
               <ItemCount  />  
             </Container>   
             </>        
   
        : 
        <Container>  
        <h1 className="mt-5">hola no se</h1>
        </Container>  
        }
        </>
    )
}

export default Detail
