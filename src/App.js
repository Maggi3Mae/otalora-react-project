import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';



function App() {
  let saludo = "Hola, estas entrando en la mejor tienda del mundo mundial"
  return (
    <>
      <NavBar/>  
      <ItemListContainer greeting={saludo}/>
    </>
  );
}

export default App;
