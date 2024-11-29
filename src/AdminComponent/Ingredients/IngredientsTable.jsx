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
    Modal,
    Button,
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import CreateIngredientForm from "./CreateIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientsOfRestaurant } from "../../component/State/Ingredients/Action";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const IngredientsTable = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients } = useSelector((store) => store);

    const [ingredientStock, setIngredientStock] = useState({});

    useEffect(() => {
        if (jwt && restaurant?.usersRestaurant?.id) {
            dispatch(
                getIngredientsOfRestaurant({
                    jwt,
                    id: restaurant.usersRestaurant.id,
                })
            );
        }
    }, [dispatch, jwt, restaurant?.usersRestaurant?.id]);

    useEffect(() => {
        // Initialize the stock status for each ingredient
        if (ingredients.ingredients) {
            const stockMap = ingredients.ingredients.reduce((acc, ingredient) => {
                acc[ingredient.id] = ingredient.inStoke;
                return acc;
            }, {});
            setIngredientStock(stockMap);
        }
    }, [ingredients.ingredients]);

    const handleUpdateStock = (id) => {
        setIngredientStock((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Card sx={{background:"#EC7755"}} className="mt-1">
                <CardHeader
                    action={
                        <IconButton sx={{color:"#FFFF"}} onClick={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                    title="Ingredients"
                    sx={{ pt: 2, alignItems: "center", color:"#FFFF" }}
                />
                <TableContainer sx={{background:"#FFF2E9"}} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="ingredient table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Availability</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients.ingredients.map((ingredient) => (
                                <TableRow
                                    key={ingredient.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="left">{ingredient.id}</TableCell>
                                    <TableCell align="left">{ingredient.name}</TableCell>
                                    <TableCell align="left">{ingredient.category.name}</TableCell>
                                    <TableCell align="left">
                                        <Button
                                            onClick={() => handleUpdateStock(ingredient.id)}
                                            sx={{
                                                color: ingredientStock[ingredient.id] ? "green" : "red",
                                            }}
                                        >
                                            {ingredientStock[ingredient.id] ? "In Stock" : "Out of Stock"}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={modalStyle}>
                    <CreateIngredientForm />
                </Box>
            </Modal>
        </Box>
    );
};

export default IngredientsTable;
