

import React, { useEffect } from "react";
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
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodAction, getMenuItemsByRestaurantId } from "../../component/State/Menu/Action";
const orders = [
    {
        id: 1,
        image: "https://via.placeholder.com/50",
        customer: "John Doe",
        price: "$15.00",
        name: "Pizza",
        ingredients: "Cheese, Tomato, Basil",
        status: "Completed",
    },
    {
        id: 2,
        image: "https://via.placeholder.com/50",
        customer: "Jane Smith",
        price: "$12.00",
        name: "Burger",
        ingredients: "Beef, Lettuce, Cheese",
        status: "Pending",
    },
    // Add more orders as needed
];

const MenuTable = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients, menu } = useSelector((store) => store);

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
    const naviage = useNavigate();
    const handleDeleteFood=(foodId)=>{
        dispatch(deleteFoodAction({foodId,jwt}))
    }
    return (
        <Box>
            <Card className="mt-1">
                <CardHeader action={
                    <IconButton onClick={() => naviage("/admin/restaurants/add-menu")} aria-label="settings">
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
                                <TableCell align="right">Avaibility</TableCell>
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
                                    <TableCell align="right">{item.name}</TableCell>
                                    <TableCell align="right">
                                        {item.ingredients.map((ingredient, index) => (
                                            <Chip
                                                key={index}
                                                label={typeof ingredient === "string" ? ingredient : ingredient.name}
                                            />
                                        ))}
                                    </TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.available?"In Stock":"Out Of Stock"}</TableCell>
                                    <TableCell align="right"><IconButton color="error" onClick={()=>handleDeleteFood(item.id)}><Delete /></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
}
export default MenuTable;