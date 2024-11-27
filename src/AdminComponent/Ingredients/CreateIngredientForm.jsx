


import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../component/State/Ingredients/Action';

const CreateIngredientForm = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { restaurant,ingredients } = useSelector((store) => store);

    const [formData, setFormData] = useState({
        name: "",
        categoryId: "",
    }); 

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        const data = {
            ...formData,
            restaurantId: restaurant.usersRestaurant.id
        };
        dispatch(createIngredient({data,jwt}))
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
                    id="name"
                    name="name"
                    label="Ingredient Name"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={formData.name}
                    margin="normal"
                />
                <FormControl fullWidth>
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        value={formData.categoryId}
                        onChange={handleInputChange}
                        name="categoryId" // Fixed syntax for `name` prop
                        label="category"
                    >
                        {
                            ingredients?.category.map((item,index)=> <MenuItem key={index} value={item.id}>{item.name}</MenuItem>)
                        }
                       
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
        </div>
    );
};

export default CreateIngredientForm;



