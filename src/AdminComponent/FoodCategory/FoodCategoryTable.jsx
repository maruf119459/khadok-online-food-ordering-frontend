



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

const FoodCategoryTable = () => {
    return (
        <Box>
            <Card className="mt-1">
                <CardHeader action={
                    <IconButton aria-label="settings">
                        <CreateIcon />
                    </IconButton>
                }
                    title="Food Category"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="order table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
}
export default FoodCategoryTable;