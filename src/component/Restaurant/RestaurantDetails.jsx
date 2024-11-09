import React, { useState } from 'react';
import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';  // Use MUI Grid for layout, not Swiper's module
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';

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
    const [foodType, setFoodType] = useState("all");

    const handelFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className=' py-2 mt-10'>Home/Bangladesh/Restaurant X</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" alt='restaurant-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" alt='restaurant-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" alt='restaurant-cover' />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibolt'>Restaurant X</h1>
                    <div className='space-y-3 mt-3'>
                        <p className='flex items-center gap-3'>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, modi. Laboriosam, nostrum suscipit dignissimos officia delectus aspernatur eveniet laborum, reprehenderit voluptate sequi odio. Minima fugit, delectus quia facere ut blanditiis sequi voluptatibus vel impedit molestiae quaerat maxime perspiciatis dignissimos obcaecati placeat exercitationem, dolor tempora illum quos? Minus, necessitatibus corporis? Necessitatibus quas ratione voluptate atque ab doloribus deserunt maxime eaque blanditiis eligendi commodi quidem distinctio possimus illum reiciendis dolores nihil doloremque soluta temporibus quia, nemo deleniti incidunt? Atque qui similique, laboriosam reprehenderit eaque deserunt eum aliquam recusandae optio rerum? Laudantium optio neque doloremque eveniet aperiam consequuntur voluptatem cupiditate aspernatur natus qui laborum adipisci asperiores dicta, quaerat architecto maxime numquam praesentium voluptas rerum repellendus voluptates. Cumque eaque blanditiis nisi quidem recusandae minima, nihil illum doloremque, dolores eius hic quaerat corrupti sed, ea neque sequi vel voluptatum voluptatibus temporibus. Nostrum quaerat quos ad inventore quasi blanditiis sit quis odit, vel expedita veniam nulla, facere dolorum, laudantium molestias fugiat eum magni quibusdam ullam. Consequatur vitae sit eveniet delectus voluptates facere cum saepe tempore quae voluptatum molestias amet quis, aliquid corrupti deleniti earum ea unde ipsam non. Quaerat alias itaque suscipit dolores vel possimus, et maiores officia voluptatibus accusantium praesentium? Dolorem adipisci dolore doloremque inventore.
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
                        menu.map((item)=><MenuCard/>)
                    }
                </div>

            </section>
        </div>
    );
};

export default RestaurantDetails;
