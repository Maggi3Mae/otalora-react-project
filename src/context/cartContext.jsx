import { createContext,  useState, useContext } from 'react'
import {getFirestore} from '../services/FirebaseService'
import {ProductContext} from './../context/productContext';
export const CartContext = createContext() //crea contexto, se exporta

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const {items} = useContext(ProductContext)

       


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
        var item = items.find( game => game.id === id );
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