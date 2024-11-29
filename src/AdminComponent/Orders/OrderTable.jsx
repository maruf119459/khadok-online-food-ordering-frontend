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
  AvatarGroup,
  Avatar,
  Chip,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Delivered", value: "DELIVERED" },
];

const dummyOrders = [
  {
    id: 1,
    customer: { fullName: "John Doe" },
    totalPrice: 50,
    orderStatus: "PENDING",
    items: [
      {
        food: { name: "Burger-Deluxe", images: ["https://via.placeholder.com/40"] },
        ingredients: ["Lettuce", "Tomato"],
      },
    ],
  },
  {
    id: 2,
    customer: { fullName: "Jane Smith" },
    totalPrice: 75,
    orderStatus: "DELIVERED",
    items: [
      {
        food: { name: "Pizza-Margherita", images: ["https://via.placeholder.com/40"] },
        ingredients: ["Cheese", "Basil"],
      },
    ],
  },
];

const OrderTable = () => {
  const [orders, setOrders] = useState(dummyOrders);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleUpdateOrder = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, orderStatus: newStatus } : order
      )
    );
    handleClose();
  };

  return (
    <Box>
      <Card sx={{background:"#EC7755"}} className="mt-8 bg-[#FFF2E9] ">
        <CardHeader title="All Orders" sx={{ pt: 2, alignItems: "center", color:"#FFFF" }} />
        <TableContainer  sx={{background:"#FFF2E9"}} component={Paper}>
          <Table sx={{ minWidth: 650,  }} aria-label="order table" >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell align="right">
                    <AvatarGroup>
                      {order.items.map((item, index) => (
                        <Avatar key={index} src={item.food?.images[0]} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="right">{order.customer?.fullName}</TableCell>
                  <TableCell align="right">{order.totalPrice + 5 + 21}</TableCell>
                  <TableCell align="right">
                    {order.items.map((orderItem, index) => (
                      <p key={index}>{orderItem.food?.name.split("-")[0]}</p>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {order.items.map((orderItem, index) => (
                      <div key={index}>
                        {orderItem.ingredients.map((ingredient, idx) => (
                          <Chip key={idx} label={ingredient} />
                        ))}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">{order.orderStatus}</TableCell>
                  <TableCell align="right">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(event) => handleClick(event, order.id)}
                      sx={{color:"#EC7755"}}
                    >
                      Update
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open && selectedOrderId === order.id}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {orderStatus.map((status, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => handleUpdateOrder(order.id, status.value)}
                        >
                          {status.label}
                        </MenuItem>
                      ))}
                    </Menu>
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

export default OrderTable;
