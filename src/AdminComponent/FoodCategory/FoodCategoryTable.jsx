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
import CreateIcon from "@mui/icons-material/Create";
import CreateFoodCategoryForm from "./CreateFoodCategoryForm"; // Ensure the import path is correct
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsCategory } from "../../component/State/Restaurant/Action";


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

const FoodCategoryTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const { restaurant } = useSelector((store) => store);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getRestaurantsCategory({ jwt, restaurantId: restaurant.usersRestaurant.id }))
  }, [dispatch, jwt, restaurant.usersRestaurant.id])

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          action={
            <IconButton onClick={handleOpen} aria-label="settings">
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
              {restaurant.categories.map((item,index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item?.id}
                  </TableCell>
                  <TableCell align="left">{item.name}</TableCell>
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
          <CreateFoodCategoryForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default FoodCategoryTable;
