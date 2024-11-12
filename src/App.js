import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { colorTheme } from './Theme/ColorTheme';
import { CssBaseline } from '@mui/material';
// import RestaurantDetails from './component/Restaurant/RestaurantDetails';
// import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
// import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        {/* <Navbar></Navbar> */}
        {/* <Home/> */}
        {/* <RestaurantDetails/> */}
        {/* <Cart/> */}
        {/* <Profile/> */}
        <CustomerRoute/>
      </ThemeProvider>
    </div>
  );
}

export default App;
