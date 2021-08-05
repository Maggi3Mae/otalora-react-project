import { createContext,  useState } from 'react'

import GameList from "./../services/getItems";

export const CartContext = createContext() //crea contexto, se exporta

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

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
        var item = GameList.find( game => game.id === id );
        if(isInCart(item.id)){
            quantity += quantity //si esta repetido hace esto
            let index = cart.findIndex((e) => e.item.id === item.id)
            cart.splice(index, 1)
            setCart([...cart, {'item': item , 'quantity': quantity }])
        } else{ ///si es falso hace esto
            setCart([...cart, {'item': item , 'quantity': quantity }])
        }
       
/*         //var item =  titleArray.title 
        setCart([...cart, {'item': item, 'quantity':quantity }])    */     
    }
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
   )
}
export default CartContextProvider