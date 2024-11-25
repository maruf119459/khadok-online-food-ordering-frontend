import React, { useState } from "react";
import { Button, Grid, Card, CardHeader, CardContent } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook, Twitter, YouTube } from "@mui/icons-material";
const RestaurantDetails = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleRestaurantStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:px-20 px-5 py-10">
      {/* Header Section */}
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold">
          Indian Fast Food
        </h1>
        <div>
          <Button
            color={isOpen ? "error" : "primary"}
            variant="contained"
            onClick={handleRestaurantStatus}
            size="large"
          >
            {isOpen ? "Close" : "Open"}
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
                  <p className="text-[#EC7755]">- Raam</p>
                </div>
                <div className="flex">
                  <p className="w-48">Restaurant Name</p>
                  <p className="text-[#EC7755]">- Indian Fast Food</p>
                </div>
                <div className="flex">
                  <p className="w-48">Cuisine Type</p>
                  <p className="text-[#EC7755]">- Indian</p>
                </div>
                <div className="flex">
                  <p className="w-48">Opening Hours</p>
                  <p className="text-[#EC7755]">- Mon-Sun: 9:00 AM - 9:00 PM</p>
                </div>
                <div className="flex">
                  <p className="w-48">Status</p>
                  <p className={`text-gray-400 ${isOpen ? "text-green-400" : "text-red-400"}`}>
                    - {isOpen ? "Open" : "Closed"}
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
                  <p className="text-[#EC7755]">- India</p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-[#EC7755]">- Bangalore</p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-[#EC7755]">- 530068</p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-[#EC7755]">- Ambavadi Choke</p>
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
                  <p className="text-[#EC7755]">- codewithzosh@gmail.com</p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="text-[#EC7755]">- +91903344783</p>
                </div>
                <div className="flex items-center">
                  <p className="w-48">Social</p>
                  <div className="flex gap-4 text-[#EC7755]">
                    <i><InstagramIcon></InstagramIcon></i>
                    <i><Twitter/></i>
                    <i ><YouTube/></i>
                    <i><Facebook/></i>
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
