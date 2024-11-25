import React from "react";
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
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

const ingredients = [
    { id: 1, name: "Tomato", category: "Vegetables", availability: "Available" },
    { id: 2, name: "Cheese", category: "Dairy", availability: "Out of Stock" },
    { id: 3, name: "Chicken", category: "Meat", availability: "Available" },
    // Add more ingredients if needed
];

const IngredientsTable = () => {
    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
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
        </Box>
    );
};

export default IngredientsTable;
