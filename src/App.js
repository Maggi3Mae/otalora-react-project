import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' //es as le camba el nombre

function App() {
  //adentro del switch van solamente los que se van a switchear 
  let saludo = "Hola, estas entrando en la mejor tienda del mundo mundial"
  return (
    <Router>
      <NavBar /> 
      <Switch>      
        <Route exact path="/">
           <ItemListContainer greeting={saludo}/>
        </Route>  
        <Route exact path='/category' component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
}

export default App;