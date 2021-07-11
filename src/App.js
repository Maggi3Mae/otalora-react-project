import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';



function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <ItemListContainer greeting={"Hola, estas entrando en la mejor tienda del mundo mundial"}/>
      </div>
    </>
  );
}

export default App;
