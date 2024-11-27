import { Avatar, Badge, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import "./Navbar.css"
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { auth, cart } = useSelector(store => store);
    const navigate = useNavigate();

    const handleAvatarClick = () => {
        if (auth.user?.role === "ROLE_CUSTOMER") {
            navigate("/my-profile")
        }
        else {
            navigate("/admin/restaurants")
        }
    }
    return (
        <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#FFD1B2] lg:px-20 flex
        justify-between '>
            <div className='lg:mr-10 cursor-pointer flex items-center
                space-x-4'>
                <li onClick={()=>navigate("/")} className='logo font-semibold text-black-100 text-3xl'>
                    K h a d o k
                </li>
            </div>


            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: "#000000" }} />
                    </IconButton>

                </div>

               { !auth.user?.role === "ROLE_CUSTOMER"?<div className=''>
                    <IconButton onClick={()=>navigate("/cart")}>
                        <Badge sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: "#EC7755",  // Custom badge color
                                color: "#FFFFFF",            // Badge text color
                            },
                        }} badgeContent={cart.cart?.items?.length}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "#000000" }} />
                        </Badge>
                    </IconButton>
                </div>:<></>}
                <div className=''>
                    {auth.user ? <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "#EF7C5D", color: "#FFD1B2" }}> {auth.user?.fullName[0].toUpperCase()}</Avatar> : <IconButton onClick={() => navigate("/account/login")}><LoginIcon /></IconButton>}

                </div>

            </div>


        </Box>
    );
};

export default Navbar;