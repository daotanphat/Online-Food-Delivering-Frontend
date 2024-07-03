import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        {/* <Home /> */}
        <RestaurantDetails />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
