


import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CreateIngredientForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        ingredientCategoryId: "",
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
            <h1 className=" text-center text-xl pb-10">Create Ingredient</h1>
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
                <FormControl fullWidth>
                    <InputLabel id="seasonal">Is Seasional</InputLabel>
                    <Select
                        labelId="seasonal"
                        id="seasonal"
                        value={formData.ingredientCategoryId}
                        onChange={handleInputChange}
                        name="ingredientCategoryId" // Fixed syntax for `name` prop
                        label="Seasonal"
                    >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
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

export default CreateIngredientForm;



