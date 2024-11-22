import React, { useEffect, useState } from 'react';
import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';  // Use MUI Grid for layout, not Swiper's module
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById } from '../State/Restaurant/Action';

const categories = [
    "Pizza",
    "Biryani",
    "Burger",
    "Chiken",
    "Rice"
]
const menu = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seassonal" }
]

const RestaurantDetails = () => {
    // setFoodType
    const [foodType, ] = useState("all");
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant} = useSelector(store=>store)
// auth city
    const {id, } = useParams();

    const handelFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

    console.log("restaurant ",restaurant)
    useEffect(()=>{
        dispatch(getRestaurantById({jwt,restaurantId:id}))
    },[dispatch,jwt,id])
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className=' py-2 mt-10'>Home/Bangladesh/Restaurant X</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover' src={restaurant.restaurant?.images[0]} alt='restaurant-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src={restaurant.restaurant?.images[1]} alt='restaurant-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://github.com/maruf119459/khadok-online-food-ordering-frontend/blob/main/src/assetes/Black%20Green%20Modern%20Food%20Channel%20Video.gif" alt='restaurant-cover' />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibolt'>{restaurant.restaurant?.name}</h1>
                    <div className='space-y-3 mt-3'>
                        <p className='flex items-center gap-3'>
                            <span>
                                {restaurant.restaurant?.description}
                            </span>
                        </p>
                        <div className='flex gap-x-1'>
                            <div>
                                <LocationOnIcon></LocationOnIcon>
                            </div>
                            <div>
                                <p>Location</p>
                            </div>
                        </div>
                        <div className='flex gap-x-1 '>
                            <div>
                                <CalendarMonthIcon></CalendarMonthIcon>
                            </div>
                            <div>
                                <p>CalendarMonthIcon</p>
                            </div>
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
                                Food type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component="fieldset">
                                <RadioGroup onChange={handelFilter} name='food_type' value={foodType || "all"}>
                                    {
                                        foodTypes.map((item) => (
                                            <FormControlLabel
                                                key={item.value} // Ensure each item has a unique key
                                                value={item.value}
                                                control={<Radio />}
                                                label={item.label}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component="fieldset">
                                <RadioGroup onChange={handelFilter} name='food_type' value={foodType || "all"}>
                                    {
                                        categories.map((item) => (
                                            <FormControlLabel
                                                key={item} // Ensure each item has a unique key
                                                value={item}
                                                control={<Radio />}
                                                label={item}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {
                        menu.map((item,index)=><MenuCard key={index}/>)
                    }
                </div>

            </section>
        </div>
    );
};

export default RestaurantDetails;
