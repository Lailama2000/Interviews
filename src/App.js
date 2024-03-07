import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navbar from './Navbar';
import Footer from './Footer';
import {  createTheme , ThemeProvider} from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily:'Montserrat, sans-serif'
    },
    Button:{
      fontFamily:'Montserrat, sans-serif'
    }
  });
  return (
    <div>
      <HelmetProvider>
        <HashRouter>
        <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element= {<MainPage />}/>
          </Routes>
          <Footer />
          </ThemeProvider>
        </HashRouter>
        </HelmetProvider>
    </div>
  );
}

export default App;
