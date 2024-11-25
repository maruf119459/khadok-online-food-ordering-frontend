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
} from "@mui/material";

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

const OrderTable=()=> {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title="All Orders"
          sx={{ pt: 2, alignItems: "center" }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="order table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Status</TableCell>
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
                  <TableCell align="right">
                    <img
                      src={row.image}
                      alt={row.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell align="right">{row.customer}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.ingredients}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
export default OrderTable;