import React from "react";
import { Button, Grid, Card, CardHeader, CardContent } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurantStatus } from "../../component/State/Restaurant/Action";
const facebook = `https://www.facebook.com/`;
const youtube=`https://www.youtube.com/watch?v=pVwhdzYaUwU&list=RDGMEMPipJmhsMq3GHGrfqf4WIqA&index=13`
const RestaurantDetails = () => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);

  const handleRestaurantStatus = () => {
    dispatch(updateRestaurantStatus({
      restaurantId:restaurant.usersRestaurant.id,
      jwt:localStorage.getItem("jwt")
    })) 
  };

  console.log("ADDRESS ", restaurant)


  return (
    <div className="lg:px-20 px-5 py-10">
      {/* Header Section */}
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold">
          {restaurant.usersRestaurant?.name}
        </h1>
        <div>
          <Button
            color={restaurant.usersRestaurant?.open ? "error" : "primary"}
            variant="contained"
            onClick={handleRestaurantStatus}
            size="large"
          >
            {restaurant.usersRestaurant?.open ? "Close" : "Open"}
          </Button>
        </div>
      </div>

      {/* Details Section */}
      <Grid container spacing={4}>
        {/* Restaurant Info */}
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: "#FFF2E9",}} className=" text-gray-200">
            <CardHeader title="Restaurant" />
            <CardContent>
              <div className="space-y-4">
                <div className="flex">
                  <p className="w-48">Owner</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.owner.fullName}</p>
                </div>
                <div className="flex">
                  <p className="w-48">Restaurant Name</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.name}</p>
                </div>
                <div className="flex">
                  <p className="w-48">Cuisine Type</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.cuisineType}</p>
                </div>
                <div className="flex">
                  <p className="w-48">Opening Hours</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.openingHours}</p>
                </div>
                <div className="flex">
                  <p className="w-48">Status</p>
                  <p className={`${restaurant.usersRestaurant?.open ?   "text-green-400" :"text-red-600" }`}>
                    - {restaurant.usersRestaurant?.open ? "Open" : "Closed"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Address Info */}
        <Grid item xs={12} md={6}>
          <Card  sx={{ bgcolor: "#FFF2E9",}} className="bg-gray-800 text-[#EC7755]">
            <CardHeader title="Address" />
            <CardContent>
              <div className="space-y-4">
                <div className="flex">
                  <p className="w-48">Country</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.address?.country || "Bangladesh"}</p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.address?.city || "Dhaka"}</p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.address?.postalCode || "1202"}</p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.address?.streetAddress || "New Elephant Road"}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12}>
          <Card  sx={{ bgcolor: "#FFF2E9",}} className=" text-gray-200">
            <CardHeader title="Contact" />
            <CardContent>
              <div className="space-y-4">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.contactInformation?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="text-[#EC7755]">- {restaurant.usersRestaurant?.contactInformation?.mobile}</p>
                </div>
                <div className="flex items-center">
                  <p className="w-48">Social</p>
                  <div className="flex gap-4 text-[#EC7755]">
                    <i><a href={restaurant.usersRestaurant?.contactInformation?.instagram}><InstagramIcon/></a></i>
                    <i><a href={restaurant.usersRestaurant?.contactInformation?.twitter}><Twitter/></a></i>
                    <i><a href={youtube}><YouTube/></a></i>
                    <i><a href={facebook}><Facebook/></a></i>
                  
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDetails;
