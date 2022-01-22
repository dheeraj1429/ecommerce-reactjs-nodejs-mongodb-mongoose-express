import './App.css';

import { Routes, Route } from 'react-router';
import HomePage from './Pages/HomePage/HomePage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';

import Dashboard from './Pages/Dashboard/Dashboard';
import ProductsUploadComponent from './DashboardComponents/ProductsUploadComponent/ProductsUploadComponent';
import DashboardProductsComponent from './DashboardComponents/DashboardProductsComponent/DashboardProductsComponent';
import ProductsDetailsComponent from './DashboardComponents/ProductsDetailsComponent/ProductsDetailsComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/single-product" element={<SingleProductPage />} />
        <Route path="/user/dashboard" element={<Dashboard />}>
          <Route path="add-products" element={<ProductsUploadComponent />} />
          <Route path="products" element={<DashboardProductsComponent />} />
          <Route path="products/details" element={<ProductsDetailsComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
