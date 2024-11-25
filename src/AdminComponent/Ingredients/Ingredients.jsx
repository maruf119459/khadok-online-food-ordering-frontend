import React from 'react';
import { Grid } from '@mui/material'; // Fixed import from Swiper to Material-UI
import IngredientsTable from './IngredientsTable';
import IngredientCategoryTable from './IngredientCategoryTable';

const Ingredients = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <IngredientsTable />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <IngredientCategoryTable />
                </Grid>
            </Grid>
        </div>
    );
};

export default Ingredients;
