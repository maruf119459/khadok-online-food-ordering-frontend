import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../component/State/Restaurant/Action';

const CreateFoodCategoryForm = () => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: restaurant.usersRestaurant.id,
      },
    };
    dispatch(createCategoryAction({reqData:data, jwt:localStorage.getItem("jwt")}))
    console.log(data);
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
      <h1 className=" text-center text-xl pb-10">Create Food Category</h1>
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
    </div>
  );
};

export default CreateFoodCategoryForm;
