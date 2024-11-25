import { Dashboard, ShoppingBag } from "@mui/icons-material";
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../component/State/Authentication/Action";

const menu = [
    { title: "Dashboard", icon: <Dashboard />, path: "/" },
    { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
    { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
    { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
    { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
    { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
    { title: "Logout", icon: <LogoutIcon />, path: "/" },
];

const AdminSideBar = ({ handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleNavigate = (item) => {
        if (item.title === "Logout") {
            navigate("/");
            dispatch(logout());
            handleClose();
        } else {
            navigate(`/admin/restaurants${item.path}`);
        }
    };

    return (
        <div>
            <>
                <Drawer
                    variant={isSmallScreen ? "temporary" : "permanent"}
                    onClose={handleClose}
                    open={true}
                    anchor="left"
                    sx={{ zIndex: 1 }}
                >
                    <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>

                        {menu.map((item, i) => (
                            <div key={i}>
                                <div
                                    onClick={() => handleNavigate(item)} // Fixed: Wrapped in an anonymous function
                                    className='px-5 py-4 flex items-center gap-5 cursor-pointer'
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>

                                {i !== menu.length - 1 && <Divider />}
                            </div>
                        ))}
                    </div>
                </Drawer>
            </>
        </div>
    );
};

export default AdminSideBar;
