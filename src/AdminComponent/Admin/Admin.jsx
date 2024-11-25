import React from 'react';
import AdminSideBar from './AdminSideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Orders from '../Orders/Orders';
import Menu from '../Menu/Menu';
import FoodCategory from '../FoodCategory/FoodCategory';
import Ingredients from '../Ingredients/Ingredients';
import RestaurantDetails from './RestaurantDetails';

const Admin = () => {
    const handleClose = () => {

    }
    return (
        <div>
            <div className="lg:flex justify-between">
                <div>
                    <AdminSideBar handleClose={handleClose} />
                </div>
                <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route path='/orders' element={<Orders />}></Route>
                        <Route path='/menu' element={<Menu />}></Route>
                        <Route path='/category' element={<FoodCategory />} />
                        <Route path='/ingredients' element={<Ingredients />}/>
                        <Route path='/details' element={<RestaurantDetails />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Admin;