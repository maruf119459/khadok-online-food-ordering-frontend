import React, { useState } from "react";
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
import CreateIngredientForm from "./CreateIngredientForm";

const ingredients = [
    { id: 1, name: "Tomato", category: "Vegetables", availability: "Available" },
    { id: 2, name: "Cheese", category: "Dairy", availability: "Out of Stock" },
    { id: 3, name: "Chicken", category: "Meat", availability: "Available" },
    // Add more ingredients if needed
];
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
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                    title="Ingredients"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
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
                            {ingredients.map((ingredient) => (
                                <TableRow
                                    key={ingredient.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="left">{ingredient.id}</TableCell>
                                    <TableCell align="left">{ingredient.name}</TableCell>
                                    <TableCell align="left">{ingredient.category}</TableCell>
                                    <TableCell align="left">{ingredient.availability}</TableCell>
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
