import React from 'react';
import MenuTable from './MenuTable';
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients } = useSelector((store) => store);
    return (
        <div className='px-2'>
            <MenuTable/>
        </div>
    );
};

export default Menu;