


import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredientCategory } from '../../component/State/Ingredients/Action';

const CreateIngredientCategoryForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const { restaurant } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    name:""
  });
//  restaurant.usersRestaurant.id 
  const handleSubmit = (e) => {
    e.preventDefault();
    const data={name: formData.name, restaurantId: restaurant.usersRestaurant.id}
    console.log(formData);
    dispatch(createIngredientCategory({data,jwt}))

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
      <h1 className=" text-center text-xl pb-10">Create Ingredient Category</h1>
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
    </div>
  );
};

export default CreateIngredientCategoryForm;
