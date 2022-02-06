import './App.css';
import { useEffect } from 'react';
import { stayLoginUser } from './Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router';

// Components
import AddToCartPopUpComponent from './Components/AddToCartPopUpComponent/AddToCartPopUpComponent';
import ProductPrevComponent from './Components/ProductPrevComponent/ProductPrevComponent';
import WishListProductAlert from './Components/WishListProductAlertComponent/WishListProductAlert';

// Pages
import HomePage from './Pages/HomePage/HomePage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';
import SingInAndLoginComponent from './Components/SingInAndLoginComponent/SingInAndLoginComponent';
import SignInComponent from './Components/SignInComponent/SignInComponent';
import SingUpComponent from './Components/SingUpComponent/SingUpComponent';
import ShopPage from './Pages/ShopPage/ShopPage';
import WishList from './Pages/WishListPage/WishList';

// Dashboard
import Dashboard from './Pages/Dashboard/Dashboard';
import ProductsUploadComponent from './DashboardComponents/ProductsUploadComponent/ProductsUploadComponent';
import DashboardProductsComponent from './DashboardComponents/DashboardProductsComponent/DashboardProductsComponent';
import ProductsDetailsComponent from './DashboardComponents/ProductsDetailsComponent/ProductsDetailsComponent';
import LoginUserComponent from './DashboardComponents/LoginUserComponent/LoginUserComponent';

function App() {
   const selector = useSelector((state) => state.userStoreData);
   const dispatch = useDispatch();

   useEffect(() => {
      const userInfo = localStorage.getItem('userinfo');
      const userData = JSON.parse(userInfo);
      if (userInfo) {
         dispatch(stayLoginUser(userData));
      }
   }, []);

   return (
      <div className="App">
         <SideBarComponent />
         <AddToCartPopUpComponent isActive={selector.showAddToCardPopUp} />
         <ProductPrevComponent isActive={selector.ShowPrevImageDiv} />
         <WishListProductAlert />

         <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop/single-product" element={<SingleProductPage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/mywishlist" element={<WishList />} />
            <Route exact path="/account" element={<SingInAndLoginComponent />}>
               <Route path="login" element={<SignInComponent />} />
               <Route path="signup" element={<SingUpComponent />} />
            </Route>
            <Route path="/user/dashboard" element={<Dashboard />}>
               <Route path="add-products" element={<ProductsUploadComponent />} />
               <Route path="products" element={<DashboardProductsComponent />} />
               <Route path="products/details" element={<ProductsDetailsComponent />} />
               <Route path="users" element={<LoginUserComponent />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
