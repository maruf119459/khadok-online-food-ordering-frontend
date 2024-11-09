import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
    return (
        <Card className=' w-[18rem] '>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover' src='https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg' alt='restaurant-image'></img>
                <Chip size='small' className='absolute top-2 left-2'
                color={true?"success":"error"} label={true?"open":"closed"}
                >

                </Chip>
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between bg-[#FFF2E9]'>
                <div className='space-y-1 '>
                    <p className='font-semibold text-lg text-[#EC7755] '>Restaturant x</p>
                    <p className=' text-sm text-justify	'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit architecto animi reiciendis, soluta tempora incidunt possimus cupiditate nemo maxime officia.
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true? <FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>

            </div>
        </Card>
    );
};

export default RestaurantCard;