import './App.css';
import Navbar from './components/NavBar';
import Cart from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <div className="menu">
        <Navbar />
        <Cart />
      </div>
      <div className='Productos'>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
