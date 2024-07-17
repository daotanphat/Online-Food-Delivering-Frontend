import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import CustomerRouter from './Routers/CustomerRouter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getUser } from './component/State/Authentication/Action';
import { getCartByUserId } from './component/State/Cart/Actions';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const authJwt = useSelector((state) => state.auth.jwt)

  useEffect(() => {
    dispatch(getUser(authJwt || jwt))
    dispatch(getCartByUserId(jwt))
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <CustomerRouter />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
