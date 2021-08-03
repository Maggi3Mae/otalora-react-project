import { createContext,  useState } from 'react'

import GameList from "./../services/getItems";

export const CartContext = createContext() //crea contexto, se exporta

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = (quantity, id) =>  {
        var titleArray = GameList.find( game => game.id === id );
        var item =  titleArray.title 
        setCart([...cart, {'item': item, 'quantity':quantity }])        
    }
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
   )
}
export default CartContextProvider