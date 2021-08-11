import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' //es as le camba el nombre
import Cart from './componentes/Cart';
import CartContextProvider from "./context/cartContext"

function App() {
  //adentro del switch van solamente los que se van a switchear 
  return (
    <CartContextProvider>
      <Router>
        <NavBar /> 
          <Switch>   
            <Route exact path="/">
              <ItemListContainer />
            </Route>
              <Route exact path="/category/:categoryId" component={ItemListContainer} />
              <Route exact path="/detail/:detailId" component={ItemDetailContainer} />
              <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
  );
}

export default App;