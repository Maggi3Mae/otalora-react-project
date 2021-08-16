import { Button, Container } from 'react-bootstrap'
import {  useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ProductContext} from './../context/productContext';

function Detail() {
  
   const { detailId } = useParams() //esto me toma el valor después de / en la url u lo guarda en la constante detailId
    //const [gameItems, setGameItems] = useState({})
  
    const {items} = useContext(ProductContext)
    const gameItems = items.find(id => id.id === detailId) //con esto solo me traigo un objeto
   //console.log(gameItems)
    return (
        <>
          <div className="image">
            <img src={gameItems.backImg}></img>
          </div>
          <Container >            
            <div className="text-wrapper row">
                <div className="d-inline-flex flex-column cover-image">
                    <img src={gameItems.picUrl} alt={gameItems.title}></img>
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
