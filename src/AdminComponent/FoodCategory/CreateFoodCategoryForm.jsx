import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CreateFoodCategoryForm = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: 1,
      },
    };
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
      <h1 className=" text-center text-xl pb-10">Create Category</h1>
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
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateFoodCategoryForm;
