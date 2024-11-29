import React, { useState } from 'react';
import ProfileNavication from './ProfileNavication';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Address from './Address';
import Favorites from './Favorites';
import Notification from './Notification';
import Paymentes from './Paymentes';

const Profile = () => {
    const [openSideBar, setOpenSideBar] =useState(false);
    return (
        <div className='lg: flex justify-between ' >
            <div className='sticky h-[80vh] lg:w-[20%]'>
                <ProfileNavication open={openSideBar}/>
            </div>
            <div className='lg:w-[80%]'>
<Routes>
    <Route path='/' element={<UserProfile/>}> </Route>
    <Route path='/orders' element={<Orders/>}> </Route>
    <Route path='/address' element={<Address/>}> </Route>
    <Route path='/favorites' element={<Favorites/>}> </Route>
    <Route path='/notifications' element={<Notification/>}> </Route>
    <Route path='/paymentes/history' element={<Paymentes/>}> </Route>
</Routes>
            </div>
            
        </div>
    );
};

export default Profile;