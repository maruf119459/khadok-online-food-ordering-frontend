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

const categories = [
    { id: 1, name: "Vegetables" },
    { id: 2, name: "Dairy" },
    { id: 3, name: "Meat" },
    // Add more categories if needed
];

const IngredientCategoryTable = () => {
    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
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
                            {categories.map((category) => (
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
        </Box>
    );
};

export default IngredientCategoryTable;
