import './App.css';
import { useEffect } from 'react';
import { stayLoginUser } from './Redux/Action/action';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';

// Pages
import HomePage from './Pages/HomePage/HomePage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';
import SingInAndLoginComponent from './Components/SingInAndLoginComponent/SingInAndLoginComponent';
import SignInComponent from './Components/SignInComponent/SignInComponent';
import SingUpComponent from './Components/SingUpComponent/SingUpComponent';

// Dashboard
import Dashboard from './Pages/Dashboard/Dashboard';
import ProductsUploadComponent from './DashboardComponents/ProductsUploadComponent/ProductsUploadComponent';
import DashboardProductsComponent from './DashboardComponents/DashboardProductsComponent/DashboardProductsComponent';
import ProductsDetailsComponent from './DashboardComponents/ProductsDetailsComponent/ProductsDetailsComponent';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = sessionStorage.getItem('userinfo');
    const userData = JSON.parse(userInfo);
    if (userInfo) {
      dispatch(stayLoginUser(userData));
    }
  }, []);

  return (
    <div className="App">
      <SideBarComponent />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/single-product" element={<SingleProductPage />} />
        <Route exact path="/account" element={<SingInAndLoginComponent />}>
          <Route path="login" element={<SignInComponent />} />
          <Route path="signup" element={<SingUpComponent />} />
        </Route>
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
