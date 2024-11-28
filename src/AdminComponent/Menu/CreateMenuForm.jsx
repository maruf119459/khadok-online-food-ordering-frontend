

import React, { useEffect, useState } from "react";
import { Grid, IconButton, CircularProgress, Button, TextField, FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { uploadphoto } from '../AdminUtil/UploadPhoto'
import { useDispatch, useSelector } from "react-redux";
import { createMenuItem } from "../../component/State/Menu/Action";
import { getIngredientsOfRestaurant } from "../../component/State/Ingredients/Action";
const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    restaurantId: "",
    vegetarian: true,
    seasonal: false,
    ingredients: [],
    images: [],
};


const CreateMenuForm = () => {

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients } = useSelector((store) => store);

    const [uploadImage, setUploadImage] = useState(false);

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            values.restaurantId = restaurant.usersRestaurant.id;
            const updatedName = `${values.name}-${restaurant.usersRestaurant.id}`;
            values.name = updatedName;
            dispatch(createMenuItem({menu:values,jwt}))
        },
    });

    useEffect(() => {
        if (jwt && restaurant?.usersRestaurant?.id) {
            dispatch(
                getIngredientsOfRestaurant({
                    jwt,
                    id: restaurant.usersRestaurant.id,
                })
            );
        }
    }, [dispatch, jwt, restaurant?.usersRestaurant?.id]);
    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setUploadImage(true)
        const image = await uploadphoto(file)
        formik.setFieldValue("images", [...formik.values.images, image])
        setUploadImage(false)
    };



    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images]
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages)
    }

    return (
        <div className="py-10 lg:flex items-center justify-center min-h-screen  text-black">
            <div className="max-w-4xl w-full">
                <h1 className="font-bold text-3xl text-center py-2">
                    Create New Menu
                </h1>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <Grid container spacing={2}>
                        {/* Upload Image Section */}
                        <Grid item xs={12}>
                            <div className="flex flex-wrap gap-5">
                                {/* Upload Button */}
                                <input
                                    accept="image/*"
                                    id="fileInput"
                                    style={{ display: "none" }}
                                    onChange={handleImageChange}
                                    type="file"
                                />
                                <label className="relative" htmlFor="fileInput">
                                    <div className="w-24 h-24 cursor-pointer flex items-center justify-center border border-gray-600 rounded-md text-white">
                                        <AddPhotoAlternateIcon />
                                    </div>
                                    {uploadImage && (
                                        <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                                            <CircularProgress />
                                        </div>
                                    )}
                                </label>
                                {/* Display Uploaded Images */}
                                {formik.values.images.map((image, index) => (
                                    <div className="relative w-24 h-24" key={index}>
                                        <img
                                            className="w-full h-full object-cover rounded-md"
                                            src={image}
                                            alt="Uploaded"
                                        />
                                        <IconButton
                                            size="small"
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                right: 0,
                                                outline: "none",
                                                background: "rgba(0, 0, 0, 0.6)",
                                            }}
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            <CloseIcon style={{ color: "white", fontSize: "1rem" }} />
                                        </IconButton>
                                    </div>
                                ))}
                            </div>
                        </Grid>

                        {/* Form Fields */}
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                InputLabelProps={{ style: { color: "gray" } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="description"
                                label="Description"
                                variant="outlined"
                                multiline
                                rows={3}
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                InputLabelProps={{ style: { color: "gray" } }}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                id="price"
                                label="Price"
                                variant="outlined"
                                name="price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                InputLabelProps={{ style: { color: "gray" } }}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="ingredients-label">Ingredients</InputLabel>
                                <Select
                                    label="Ingredients"
                                    id="ingredients"
                                    name="ingredients"
                                    multiple
                                    value={formik.values.ingredients}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value.id} label={value.name} />
                                            ))}
                                        </Box>
                                    )}
                                >
                                    {
                                        ingredients?.ingredients.map((item,index)=><MenuItem key={index} value={item}>{item.name}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="category">Category</InputLabel>
                                <Select
                                    labelId="category"
                                    id="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    name="category" // Fixed syntax for `name` prop
                                    label="Category"
                                >
                                    {/* start herare */}
                                    {
                                        restaurant?.categories.map((item,index)=><MenuItem key={index} value={item}>{item.name}</MenuItem>)
                                    }
                                    
                                    
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="seasonal">Is Seasional</InputLabel>
                                <Select
                                    labelId="seasonal"
                                    id="seasonal"
                                    value={formik.values.seasonal}
                                    onChange={formik.handleChange}
                                    name="seasonal" // Fixed syntax for `name` prop
                                    label="Seasonal"
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="seasonal">Is Vegetarian</InputLabel>
                                <Select
                                    labelId="vegetarian"
                                    id="vegetarian"
                                    value={formik.values.vegetarian}
                                    onChange={formik.handleChange}
                                    name="vegetarian" // Fixed syntax for `name` prop
                                    label="Vegetarian"
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Action Button */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: "#EC7755", }}              >
                                Create New Menu
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default CreateMenuForm;
