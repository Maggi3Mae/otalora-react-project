import { createContext,  useState, useEffect } from 'react'
import {getFirestore} from '../services/FirebaseService'


export const ProductContext = createContext() //crea contexto, se exporta
const ProductContextProvider = ({children}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const   dbQuery = getFirestore()
        dbQuery.collection('gameList').get()
        .then(resp => setItems(resp.docs.map(i => ({...i.data(), id:i.id}))))            
        .catch((err)=> {
            console.log(err);
        }) 
    }, [])

            return (
                <ProductContext.Provider value={{ items, setItems }}>
                    {children}
                </ProductContext.Provider>
           )
}
export default ProductContextProvider