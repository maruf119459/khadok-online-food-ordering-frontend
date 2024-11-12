import { Avatar, Badge, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import "./Navbar.css"
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#FFD1B2] lg:px-20 flex
        justify-between '>
            <div className='lg:mr-10 cursor-pointer flex items-center
                space-x-4'>
                <li className='logo font-semibold text-black-100 text-3xl'>
                    K h a d o k
                </li>
            </div>


            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: "#000000" }} />
                    </IconButton>

                </div>

                <div className=''>
                    <IconButton>
                        <Badge sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: "#EC7755",  // Custom badge color
                                color: "#FFFFFF",            // Badge text color
                            },
                        }} badgeContent={2}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "#000000" }} />
                        </Badge>
                    </IconButton>
                </div>
                <div className=''>
                {false?<Avatar sx={{ bgcolor: "#EF7C5D", color: "#FFD1B2" }}> M</Avatar>:<IconButton onClick={()=>navigate("/account/login")}><LoginIcon/></IconButton>}

                </div>

            </div>


        </Box>
    );
};

export default Navbar;