import { Button, Card } from '@mui/material';
import React from 'react';

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src='https://www.culturalindia.net/iliimages/Mughlai-Cuisine-ili-115-img-4.jpg' alt='foodImage'></img>
                <div>
                    <p>Halim</p>
                    <p>৳ 200</p>
                </div>
            </div>
            <div>
                <Button className='cursor-not-allowed'>completed</Button>
            </div>
        </Card>
    );
};

export default OrderCard;