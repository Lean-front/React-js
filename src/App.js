import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/NavBar/CartWidget';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from './Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="menu">
          <NavBar />
          <Cart />
        </div>
        <Switch>
          <Route exact path="/">
            <div className='Productos'>
              <ItemListContainer />
            </div>
          </Route>
          <Route path="/categoria/:categoriaId">
            <div className='Productos'>
              <ItemListContainer />
            </div>
          </Route>
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contacto">CONTACTO</Route>
          <Route exact path="/cart">Carrito</Route>
        </Switch>
        <br />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
