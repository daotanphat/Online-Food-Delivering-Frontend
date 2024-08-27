import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getUser } from './component/State/Authentication/Action';
import { getCartByUserId } from './component/State/Cart/Actions';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routers/Router';
import { getRestaurantByUserId } from './component/State/Restaurant/Actions';

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const authJwt = useSelector((state) => state.auth.jwt)

  useEffect(() => {
    dispatch(getUser(authJwt || jwt))
    dispatch(getCartByUserId(authJwt || jwt))
    dispatch(getRestaurantByUserId(authJwt || jwt))
  }, [authJwt])
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
