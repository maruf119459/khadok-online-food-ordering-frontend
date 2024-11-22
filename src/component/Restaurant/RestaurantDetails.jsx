import React, { useEffect, useState } from 'react';
import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'; // Use MUI Grid for layout
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';

const categories = ["Pizza", "Biryani", "Burger", "Chicken", "Rice"];
const menu = Array(15).fill(1); // Replaced hardcoded array for clarity
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
];

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const[selectedCategory, setSelectedCategory]=useState("");

    const { id,city } = useParams();

    const { auth,restaurant,menu } = useSelector((store) => store);
    console.log(restaurant)
    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }));
        dispatch(getRestaurantsCategory({jwt,restaurantId: id }));
    }, [dispatch, jwt, id]);

    useEffect(()=>{
        dispatch(getMenuItemsByRestaurantId({jwt,restaurantId:id,
            vegetarian: foodType==="vegetarian",
            nonveg: foodType==="non_vegetarian", 
            seasonal:foodType==="seasonal", 
            foodCategory:selectedCategory
    }))
    },[dispatch,selectedCategory,jwt,id,foodType])

    const handleFilter = (e) => {
        const { name, value } = e.target;
        setFoodType(value); // Updates the state for selected food type
        console.log(`${name}: ${value}`);
    };

    const handleFilterCategory = (e,value) => {
        setSelectedCategory(value)
    };

    const defaultImages = [
        "https://i.ibb.co/XZX4By8/Black-Green-Modern-Food-Channel-Video.gif",
        "https://i.ibb.co/7kvCgMG/Brown-Aesthetic-Food-Menu-Video.gif",
        "https://i.ibb.co/hKT6SkH/Green-Brown-Minimalist-Bakery-Youtube-Video-Ad.gif",
    ];

    const imageArray = restaurant?.restaurant?.images || [];
    while (imageArray.length < 3) {
        imageArray.push(defaultImages[imageArray.length % defaultImages.length]);
    }

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='py-2 mt-10'>Home/Bangladesh/Restaurant X</h3>
                <Grid container spacing={2}>
                    {imageArray.map((src, index) => (
                        <Grid key={index} item xs={12} lg={index === 0 ? 12 : 6}>
                            <img className='w-full h-[50vh] object-cover' src={src} alt={`restaurant-cover-${index}`} />
                        </Grid>
                    ))}
                </Grid>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>{restaurant?.restaurant?.name}</h1>
                    <div className='space-y-3 mt-3'>
                        <p className='flex items-center gap-3'>
                            <span>{restaurant?.restaurant?.description}</span>
                        </p>
                        <div className='flex gap-x-1'>
                            <LocationOnIcon />
                            <p>{restaurant?.restaurant?.location || "Location not available"}</p>
                        </div>
                        <div className='flex gap-x-1'>
                            <CalendarMonthIcon />
                            <p>{restaurant?.restaurant?.calendar || "No schedule available"}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl component="fieldset">
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl component="fieldset">
                                <RadioGroup onChange={handleFilterCategory} name='food_category' 
                                value={selectedCategory}
                                >
                                    {restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item?.name}
                                            control={<Radio />}
                                            label={item?.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu?.menuItems.map((item, index) => (
                        <MenuCard item={item} key={index} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;
