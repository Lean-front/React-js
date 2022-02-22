import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/Cart/CartWidget';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './Context/CartProvider';
import Form from './components/Cart/Form';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div className="menu">
            <NavBar />
            <CartWidget />
          </div>
          <Switch>
            <Route exact path="/">
              <div className='Productos'>
                <ItemListContainer />
              </div>
            </Route>
            <Route path="/categoria/:categoriaId">
              <div className='ContenedorMain'>
                <div className='Productos'>
                  <ItemListContainer />
                </div>
              </div>
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/sobre"><About /></Route>
            <Route exact path="/contacto">
              <div className='ContenedorMain'>
                <Contact />
              </div>
            </Route>
            <Route path="/cart">
              <div className='ContenedorMain'>
                <Cart />
              </div>
            </Route>
            <Route path="/finalizar">
              <div className='ContenedorMain'>
                <Form />
              </div>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
