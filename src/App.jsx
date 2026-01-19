import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
