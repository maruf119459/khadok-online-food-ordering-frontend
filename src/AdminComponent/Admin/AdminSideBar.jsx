import { Dashboard, ShoppingBag } from "@mui/icons-material";
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Drawer } from "@mui/material";

const menu = [
    { title: "Dashboard", icon: <Dashboard />, path: "/" },
    { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
    { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
    { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
    { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
    { title: "Events", icon: <EventIcon />, path: "/event" },
    { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
    { title: "Logout", icon: <LogoutIcon />, path: "/" },
];


const AdminSideBar = ({ handleClose }) => {
    return (
        <div>
            <>
                <Drawer
                    variant=""
                    onClose={handleClose}
                    open={true}
                    anchor="left"
                    sx={{ zIndex: 1 }}
                >
                    {/* Add your sidebar content here */}
                </Drawer>
            </>
        </div>
    );
};

export default AdminSideBar;