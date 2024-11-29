import React, { useEffect } from "react";
import image from "../../assetes/khadokBanner.png";
import "./Home.css";
import Carousel from "./Carousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../State/Restaurant/Action";

const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getAllRestaurantsAction(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <div className="pb-10">
      {/* Banner Section */}
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="z-10 pt-10 heading text-[#EC7755] text-xl lg:text-4xl">
            A great <span className="khadok">K</span>hadok knows another great{" "}
            <span className="khadok">K</span>hadok.
          </p>
        </div>
        <div>
          <img
            src={image}
            className="w-full h-[600px] -mt-5 object-cover"
            alt="Banner"
          />
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      {/* Top Foods Section */}
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-bold text-[#EC7755] py-3 pb-10">Top Foods</p>
        <Carousel />
      </section>

      {/* Restaurants Section */}
      <section className="px-5 lg:px-20 pt-10">
        {auth ? (
          <div>
            <h1 className="text-2xl font-bold text-[#EC7755] pb-8">
            {restaurant?.restaurants?.length > 0&&"Order From Your Favorite Restaurant"}
            </h1>
            <div className="flex flex-wrap items-center justify-around gap-5">
              {restaurant?.restaurants?.length > 0 ? (
                
                restaurant.restaurants.map((item) => (
                  <RestaurantCard item={item} key={item.id} />
                ))
              ) : (
                <p className="text-2xl font-bold text-center text-[#EC7755] pb-8">Please Login To Visit Restaurants.</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-center text-[#EC7755] pb-8">
            Please Login To Visit Restaurants
            </h1>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
