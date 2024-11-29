import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../component/State/Restaurant/Action";

const CreateFoodCategoryForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: restaurant.usersRestaurant.id,
      },
    };

    dispatch(createCategoryAction({ reqData: data, jwt: localStorage.getItem("jwt") }))
      .then(() => {
        setSnackbar({ open: true, message: "Category created successfully!" });
        setFormData({ categoryName: "", restaurantId: "" }); // Reset the form
        if (onClose) onClose(); // Close the modal
      })
      .catch(() => {
        setSnackbar({ open: true, message: "Failed to create category." });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-center text-xl pb-10">Create Food Category</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="categoryName"
          name="categoryName"
          label="Category Name"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.categoryName}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Create
        </Button>
      </form>

      {/* Snackbar for notifications */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbar.open}
        onClose={handleSnackbarClose}
        message={snackbar.message}
        autoHideDuration={2000}
      />
    </div>
  );
};

export default CreateFoodCategoryForm;
