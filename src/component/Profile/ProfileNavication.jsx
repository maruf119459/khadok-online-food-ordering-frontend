import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const menu = [
    {title:"Orders", icon:<LocalMallIcon/>},
    {title:"Favorites", icon:<FavoriteIcon/>},
    {title:"Address", icon:<HomeIcon/>},
    {title:"Payments", icon:<AccountBalanceWalletIcon/>},
    {title:"Notifications", icon:<NotificationsIcon/>},
    {title:"Logout", icon:<LogoutIcon/>},
    
]
const ProfileNavication = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");

    const navigate = useNavigate();
    const handleNavigate = (item) =>{
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return (
        <div>
            <Drawer variant={isSmallScreen?"temporary":"permanent"} onClose={handleClose} open={isSmallScreen?open:true} anchor='left' sx={{zIndex:-1, position:"sticky"}}>
            <div className='w-[50%vw] lg:w-[20vw] h-full flex flex-col justify-center text-xl gap-8 fixed'>
                {
                    menu.map((item,i)=><>
                    <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                    {i !== menu.length - 1 && <Divider/>}
                    </>)
                }
            </div>
            </Drawer>
        </div>
    );
};

export default ProfileNavication;