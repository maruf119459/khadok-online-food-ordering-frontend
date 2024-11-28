import React from 'react';
import { Grid } from '@mui/material';
import MenuTable from '../Menu/MenuTable';
import OrderTable from '../Orders/OrderTable';

const Dashboard = () => {
    return (
        <div >
            <Grid sx={{margin:4}} container spacing={2} className='flex flex-col justify-center items-center'>
                <Grid item xs={8} lg={8}>
                    <MenuTable />
                </Grid>
                <Grid item xs={8} lg={8}>
                    <OrderTable />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
