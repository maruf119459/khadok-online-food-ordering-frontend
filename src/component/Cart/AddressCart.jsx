import React from 'react';
import { Button, Card } from '@mui/material';

const AddressCart = (item, showButton,handelSelectAddress) => {
    
    return (
        <Card className= "flex gap-5 w-64 p-5">
            <div className='space-y-3'>
            <h1 className='font-semibold text-lg '>Home</h1>
            <p>
                Dhaka, Ashulia, Cangao
            </p>
            {showButton&& <Button variant='contained' fullWidth onClick={()=>handelSelectAddress(item)}>Select</Button>}
            </div>
        </Card>
    );
};

export default AddressCart;