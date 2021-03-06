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
import CartPage from './Pages/CartPage/CartPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import ForgetPasswordComponent from './Components/ForgetPasswordComponent/ForgetPasswordComponent';
import ResetPassword from './Pages/ResetPassword/ResetPassword';

// Dashboard
import Dashboard from './Pages/Dashboard/Dashboard';
import ProductsUploadComponent from './DashboardComponents/ProductsUploadComponent/ProductsUploadComponent';
import DashboardProductsComponent from './DashboardComponents/DashboardProductsComponent/DashboardProductsComponent';
import ProductsDetailsComponent from './DashboardComponents/ProductsDetailsComponent/ProductsDetailsComponent';
import LoginUserComponent from './DashboardComponents/LoginUserComponent/LoginUserComponent';
import ProductsEditPopupComponent from './DashboardComponents/ProductsEditPopupComponent/ProductsEditPopupComponent';
import EcommerceOrdersComponent from './DashboardComponents/EcommerceOrdersComponent/EcommerceOrdersComponent';
import DashboardBlogComponent from './DashboardComponents/DashboardBlogComponent/DashboardBlogComponent';
import AllBlogPostComponent from './Components/AllBlogPostComponent/AllBlogPostComponent';

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
         <ProductsEditPopupComponent />

         <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop/single-product" element={<SingleProductPage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/blog" element={<BlogPage />} />
            <Route exact path="/mywishlist" element={<WishList />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route path="/user/forget-password" element={<ForgetPasswordComponent />} />
            <Route path="/user/reset-password/:id" element={<ResetPassword />} />
            <Route exact path="/account" element={<SingInAndLoginComponent />}>
               <Route path="login" element={<SignInComponent />} />
               <Route path="signup" element={<SingUpComponent />} />
            </Route>
            <Route path="/user/dashboard" element={<Dashboard />}>
               <Route path="add-products" element={<ProductsUploadComponent />} />
               <Route path="products" element={<DashboardProductsComponent />} />
               <Route path="products/details" element={<ProductsDetailsComponent />} />
               <Route path="users" element={<LoginUserComponent />} />
               <Route path="ecommerce-orders" element={<EcommerceOrdersComponent />} />
               <Route path="blog" element={<DashboardBlogComponent />} />
               <Route path="all-blog" element={<AllBlogPostComponent />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
