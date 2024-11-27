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
  AvatarGroup,
  Avatar,
  Chip,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsOrder, updateOrderStatus } from "../../component/State/RestaurantOrder/Action";

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

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "ALL" },
];

const OrderTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, restaurantOrder } = useSelector((store) => store);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (jwt && restaurant?.usersRestaurant?.id) {
      dispatch(
        fetchRestaurantsOrder({
          jwt,
          restaurantId: restaurant.usersRestaurant.id,
        })
      );
    }
  }, [dispatch, jwt, restaurant?.usersRestaurant?.id]);

  const handleUpdateOrder=(orderId, orderStatus)=>{
    dispatch(updateOrderStatus({orderId,orderStatus,jwt}))
    handleClose();
  }
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
                <TableCell align="right">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantOrder.orders.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell align="right">
                    <AvatarGroup>
                      {
                        order.items.map((item, index) => <Avatar key={index} src={item.food?.images[0]} />)
                      }
                    </AvatarGroup>

                  </TableCell>
                  <TableCell align="right">{order.customer?.fullName}</TableCell>
                  <TableCell align="right">{order.totalAmount}</TableCell>
                  <TableCell align="right">{order.items.map((orderItem, index) => <p key={index}>
                    {orderItem.food?.name}
                  </p>)}</TableCell>
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
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      Update
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      {orderStatus.map((status) => (
                        <MenuItem onClick={()=>handleUpdateOrder(order.id,status.value)}>{status.label}</MenuItem>))}
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
}
export default OrderTable;