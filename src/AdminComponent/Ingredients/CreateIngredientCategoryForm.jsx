


import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CreateIngredientCategoryForm = () => {
  const [formData, setFormData] = useState({
    name:""
  });

  const handleSubmit = () => {
    
    console.log(formData);
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
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateIngredientCategoryForm;
