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
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import CreateIngredientCategoryForm from "./CreateIngredientCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientCategory } from "../../component/State/Ingredients/Action";


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
const IngredientCategoryTable = () => {
    const jwt=localStorage.getItem("jwt")
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { restaurant,ingredients } = useSelector((store) => store);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        dispatch(getIngredientCategory({id:restaurant.usersRestaurant.id , jwt}))
    },[dispatch,restaurant.usersRestaurant.id,jwt])
    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                    title="Ingredient Category"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table aria-label="category table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients?.category.map((category) => (
                                <TableRow
                                    key={category.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="left">{category.id}</TableCell>
                                    <TableCell align="left">{category.name}</TableCell>
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
          <CreateIngredientCategoryForm />
        </Box>
      </Modal>
        </Box>
    );
};

export default IngredientCategoryTable;
