import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createIngredientCategory } from "../../component/State/Ingredients/Action";

const CreateIngredientCategoryForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const [formData, setFormData] = useState({ name: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: formData.name, restaurantId: restaurant.usersRestaurant.id };

    dispatch(createIngredientCategory({ data, jwt }))
      .then(() => {
        setSnackbar({ open: true, message: "Ingredient category created successfully!" });
        setFormData({ name: "" }); // Reset form fields
        if (onClose) onClose(); // Close modal
      })
      .catch(() => {
        setSnackbar({ open: true, message: "Failed to create ingredient category." });
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
      <h1 className="text-center text-xl pb-10">Create Ingredient Category</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Category"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.name}
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

export default CreateIngredientCategoryForm;
