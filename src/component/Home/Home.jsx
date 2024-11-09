import React from 'react';
import image from '../../assetes/khadokBanner.png';
import './Home.css'
import Carousel from './Carousel';
import RestaurantCard from '../Restaurant/RestaurantCard';

const restaurant = [1,1,1,1,1,1,1,1,1,1,1,1,1];
const Home = () => {

    return (
        <div className='pb-10'>
            <section className='banner -z-50 relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='z-10 pt-10 heading text-[#EC7755] text-xl lg:text-4xl'>
                        A great <spam className='khadok'>K</spam>hadok knows another great <spam className='khadok'>K</spam>hadok .
                    </p>

                </div>
                <div>
                    <img src={image} className='w-full h-[600px] -mt-5'  alt="Banner" />
                </div>
                <div className='cover absolute top-0 left-0 right-0'>

                </div>
                <div className='fadout'>

                </div>
            </section>

            <section className='p-10 lg:py-10 lg:px-20'>
                <p className='text-2xl font-bold text-[#EC7755] py-3 pb-10'>Top Foods</p>
                <Carousel></Carousel>
            </section>
            <section className='px-5 lg:px-20 pt-10'>
                <h1 className='text-2xl font-bold  text-[#EC7755] pb-8'>
                    Order From Your Favorite Restaurant
                </h1>
                <div className='flex flex-wrap items-center justify-around gap-5'>
                    {
                        restaurant.map((item) => <RestaurantCard/>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;
