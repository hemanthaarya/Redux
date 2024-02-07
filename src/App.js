import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><ProductListing/></>}/>
          <Route path='/Product/:productId' element={<ProductDetail/>}/>
          <Route path='*' element={<div>404 not found!</div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
