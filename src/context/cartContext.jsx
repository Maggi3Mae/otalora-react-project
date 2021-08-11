import { createContext,  useState, useEffect } from 'react'
import {getFirestore} from '../services/FirebaseService'
export const CartContext = createContext() //crea contexto, se exporta

const CartContextProvider = ({children}) => {
    const [gameItems, setGameItems] = useState([])  
    const [cart, setCart] = useState([])
    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('gameList').get()
        .then(resp => setGameItems(resp.docs.map(i => ({...i.data(), id:i.id}))))            
        .catch((err)=> {
            console.log(err);
        }) 
    }, [])

       


    const isInCart = (id) => {
        return cart.find((item)=>{ //acá defino si el id esta en el arrray para que me regrese un falso o el id
            if(item.item.id !== id){
                return false
            }
            else {
                return item.item.id
            }
        })
    }
    const addToCart = (quantity, id) =>  { 
        var item = gameItems.find( game => game.id === id );
        if(isInCart(item.id)){
            let index = cart.findIndex((e) => e.item.id === item.id)
            let oldQ = cart[index].quantity //si esta repetido hace esto, ai estasa la cantidad ue tnía antes          
            cart.splice(index, 1)
            setCart([...cart, {'item': item , 'quantity': quantity + oldQ}]) //acá se la sumo
        } else{ ///si es falso hace esto
            setCart([...cart, {'item': item , 'quantity': quantity }])
        }
       
    
    } 
    /*         //var item =  titleArray.title 
        setCart([...cart, {'item': item, 'quantity':quantity }])    */ 
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
   )
}
export default CartContextProvider