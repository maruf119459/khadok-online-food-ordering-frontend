import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { colorTheme } from './Theme/ColorTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
// import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        <Navbar></Navbar>
        {/* <Home/> */}
        <RestaurantDetails/>
      </ThemeProvider>
    </div>
  );
}

export default App;
