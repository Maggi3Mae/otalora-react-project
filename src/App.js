import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';



function App() {
  let saludo = "Hola, estas entrando en la mejor tienda del mundo mundial"
  return (
    <>
      <NavBar/>  
      <ItemListContainer greeting={saludo}/>
      <ItemDetailContainer />
    </>
  );
}

export default App;
