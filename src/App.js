
import './App.css';
import CartContextProvider from './Components/CartContext';
import Checkout from './Components/Checkout/Checkout';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
      <CartContextProvider>
      
      <Routes>
          <Route path="/display" element={<DisplayContent />} />
          <Route path="/order/:id" element={<PlaceOrder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
        </CartContextProvider>
    </div>
    </Router>
  );
}

export default App;
