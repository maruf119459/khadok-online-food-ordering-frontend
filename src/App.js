import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { colorTheme } from './Theme/ColorTheme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <ThemeProvider theme={colorTheme}>
      <CssBaseline/>
      <Navbar></Navbar>

      </ThemeProvider>
    </div>
  );
}

export default App;
