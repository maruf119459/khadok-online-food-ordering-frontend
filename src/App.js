import { ThemeProvider } from '@emotion/react';
import './App.css';
import { colorTheme } from './Theme/ColorTheme';
import { CssBaseline } from '@mui/material';
// import RestaurantDetails from './component/Restaurant/RestaurantDetails';
// import Cart from './component/Cart/Cart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';
import Routers from './Routers/Routers';
import { getRestaurantByUserId } from './component/State/Restaurant/Action';
// import Home from './component/Home/Home';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store)

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [dispatch, jwt, auth.jwt])

  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt));

  }, [auth.jwt, jwt,dispatch])

  return (
    <div>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        {/* <Navbar></Navbar> */}
        {/* <Home/> */}
        {/* <RestaurantDetails/> */}
        {/* <Cart/> */}
        {/* <Profile/> */}

        <Routers />
      </ThemeProvider>
    </div>
  );
}

export default App;
