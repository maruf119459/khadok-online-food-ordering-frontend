import React, { useState } from "react";
import { Grid, IconButton, CircularProgress, Button, TextField, MenuItem } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  openingHours: "Mon-Sun 9:00 AM - 9:00 PM",
  images: [],
};

const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadImage(true);
      // Simulate image upload (e.g., to a server or Cloudinary)
      setTimeout(() => {
        const newImageURL = URL.createObjectURL(file); // Temporary URL for local display
        formik.setFieldValue("images", [...formik.values.images, newImageURL]);
        setUploadImage(false);
      }, 1000); // Simulate 1-second upload delay
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-10 lg:flex items-center justify-center min-h-screen  text-black">
      <div className="max-w-4xl w-full">
        <h1 className="font-bold text-3xl text-center py-2">Add New Restaurant</h1>
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
                      <CloseIcon style={{ color: "white" , fontSize:"1rem"}} />
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Opening Houre"
                variant="outlined"
                name="openingHoures"
                value={formik.values.name}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cuisine Type"
                variant="outlined"
                name="cuisineType"
                value={formik.values.cuisineType}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Street Address"
                variant="outlined"
                name="streetAddress"
                value={formik.values.streetAddress}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="State/Province"
                variant="outlined"
                name="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Postal Code"
                variant="outlined"
                name="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Country"
                variant="outlined"
                name="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                name="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Instagram"
                variant="outlined"
                name="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Twitter"
                variant="outlined"
                name="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { color: "gray" } }}
              />
            </Grid>

            {/* Action Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor: "#EC7755",}}              >
                Create Restaurant
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurantForm;
