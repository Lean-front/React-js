import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/NavBar/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
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
          <Route exact patch="/">
            <div className='Productos'>
              <ItemListContainer />
            </div>
          </Route>
          <Route exact patch="/item/:itemId">
              <ItemDetailContainer />
          </Route>
          <Route exact patch="/categoria">CATEGORIAS</Route>
          <Route exact patch="/carrito">CARRITO</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
