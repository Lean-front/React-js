import './App.css';
import Navbar from './components/NavBar';
import Cart from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <div class="menu">
        <Navbar />
        <Cart />
      </div>
      <ItemListContainer items="Catálogo"/>      
    </>
  );
}

export default App;
