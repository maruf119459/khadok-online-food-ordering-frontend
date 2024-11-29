import React, { useState } from 'react';
import { Card, Chip, IconButton, Snackbar, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../State/Authentication/Action';
import { isPresentInFavorites } from '../config/logic';

const RestaurantCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddToFavorite = () => {
    dispatch(addToFavorite({ restaurantId: item.id, jwt }));
    setSnackbarOpen(true); // Show Snackbar
  };

  const handleNavigateToRestaurant = () => {
    if (item.open) {
      navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false); // Close Snackbar
  };

  return (
    <Card className="w-[18rem]">
      <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.images[0]}
          alt="restaurant-image"
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.open ? "success" : "error"}
          label={item.open ? "open" : "closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between bg-[#FFF2E9]">
        <div className="space-y-1">
          <p
            onClick={handleNavigateToRestaurant}
            className="font-semibold text-lg text-[#EC7755] cursor-pointer"
          >
            {item.name}
          </p>
          <p className="text-sm text-justify">{item.description}</p>
        </div>
        <div>
          <IconButton onClick={handleAddToFavorite}>
            {isPresentInFavorites(auth.favorites, item) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {isPresentInFavorites(auth.favorites, item)
            ? "Restaurant added to favorites!"
            : "Restaurant removed from favorites!"}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default RestaurantCard;
