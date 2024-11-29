import React, { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient } from "../../component/State/Ingredients/Action";

const CreateIngredientForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, ingredients } = useSelector((store) => store);

  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const data = {
      ...formData,
      restaurantId: restaurant.usersRestaurant.id,
    };
    dispatch(createIngredient({ data, jwt }))
      .then(() => {
        setSnackbar({ open: true, message: "Ingredient created successfully!" });
        setFormData({ name: "", categoryId: "" }); // Reset form fields
        if (onClose) onClose(); // Close modal
      })
      .catch(() => {
        setSnackbar({ open: true, message: "Failed to create ingredient." });
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
      <h1 className="text-center text-xl pb-10">Create Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Ingredient Name"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.name}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="category"
            value={formData.categoryId}
            onChange={handleInputChange}
            name="categoryId"
            label="Category"
          >
            {ingredients?.category?.map((item, index) => (
              <MenuItem key={index} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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

export default CreateIngredientForm;
