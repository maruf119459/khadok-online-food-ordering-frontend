import React from 'react';
import image from '../../assetes/khadokBanner.png';
import './Home.css'
import Carousel from './Carousel';

const Home = () => {

    return (
        <div className=''>
            <section className='banner -z-50 relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='z-10 pt-10 heading text-[#EC7755] text-xl lg:text-4xl'>
                        A great Khadok knows another great Khadok.
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
        </div>
    );
};

export default Home;
