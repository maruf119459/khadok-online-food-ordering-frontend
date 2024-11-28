import React, { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Chip,
    Switch,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodAction, getMenuItemsByRestaurantId } from "../../component/State/Menu/Action";

const MenuTable = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, menu } = useSelector((store) => store);

    const [availability, setAvailability] = useState({});

    useEffect(() => {
        if (jwt && restaurant?.usersRestaurant?.id) {
            dispatch(
                getMenuItemsByRestaurantId({
                    jwt,
                    restaurantId: restaurant.usersRestaurant.id,
                    vegetarian: false,
                    nonveg: false,
                    seasonal: false,
                    foodCategory: "",
                })
            );
        }
    }, [dispatch, restaurant?.usersRestaurant?.id, jwt]);

    useEffect(() => {
        // Initialize availability state based on menu items
        if (menu?.menuItems) {
            const initialAvailability = {};
            menu.menuItems.forEach((item) => {
                initialAvailability[item.id] = item.available;
            });
            setAvailability(initialAvailability);
        }
    }, [menu?.menuItems]);

    const navigate = useNavigate();

    const handleDeleteFood = (foodId) => {
        dispatch(deleteFoodAction({ foodId, jwt }));
    };

    const toggleAvailability = (id) => {
        setAvailability((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
        // Here you can also dispatch an action to update the backend if required
        // Example:
        // dispatch(updateFoodAvailabilityAction({ foodId: id, available: !availability[id], jwt }));
    };

    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    action={
                        <IconButton onClick={() => navigate("/admin/restaurants/add-menu")} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                    title="Menu"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="order table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Availability</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu?.menuItems?.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="right">
                                        <img
                                            src={item.images[0]}
                                            alt={item.name}
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{item.name.split("-")[0]}</TableCell>
                                    <TableCell align="right">
                                        {item.ingredients.map((ingredient, index) => (
                                            <Chip
                                                key={index}
                                                label={typeof ingredient === "string" ? ingredient : ingredient.name}
                                            />
                                        ))}
                                    </TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">
                                        <Switch
                                            checked={availability[item.id]}
                                            onChange={() => toggleAvailability(item.id)}
                                            color="primary"
                                        />
                                        {availability[item.id] ? "In Stock" : "Out Of Stock"}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton color="error" onClick={() => handleDeleteFood(item.id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
};

export default MenuTable;
