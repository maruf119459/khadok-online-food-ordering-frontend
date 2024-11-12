import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../component/Home/Home'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart';
import Profile from '../component/Profile/Profile';
const CustomerRoute = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/account/:register' element={<Home/>}></Route>
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/my-profile/*' element={<Profile/>}></Route>
            </Routes>
        </div>
    );
};

export default CustomerRoute;