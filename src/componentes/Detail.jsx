import { Button, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems';
import { useParams } from 'react-router-dom'
import {getFirestore} from '../services/FirebaseService'

function Detail() {
  
   const { detailId } = useParams() //esto me toma el valor después de / en la url u lo guarda en la constante detailId
    const [gameItems, setGameItems] = useState({})
      //acá uso el mock para que todo el array quede en 1 solo archivo y lo importo arriba
    useEffect(() => {
      const dbQuery = getFirestore()
      dbQuery.collection('gameList').where('id','==', detailId).get()
      .then(resp => setGameItems(resp.docs.map(i => ({...i.data(), id:i.id}))))
      .catch((err)=> {
          console.log(err);
        })
    }, [detailId])
  console.log(gameItems)
    return (
        <>
          <div className="image">
            <img src={gameItems.backImg}></img>
          </div>
          <Container >            
            <div className="text-wrapper row">
                <div className="d-inline-flex flex-column cover-image">
                    <img src={gameItems.picUrl}></img>
                    <Button className="mt-3" variant="warning" onClick={()=>{window.history.back()}}>Regresar</Button>   
                </div>
                <div className="col">
                    <h1>{gameItems.title}</h1>
                    <p>{gameItems.sumary}</p>
                    <h3>Precio: ${gameItems.price} COP</h3>                   
                </div>
            </div>
          </Container>            
        </>
    )
}

export default Detail
