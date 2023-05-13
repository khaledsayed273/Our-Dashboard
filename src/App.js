import { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './SideBar';
import NavBar from './NavBar';
import MainPage from './MainPage';


function App() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [drawerWidth, setDrawerWidth] = useState(240)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar drawerWidth={drawerWidth} setDrawerWidth={setDrawerWidth} handleDrawerToggle={handleDrawerToggle} />

      <SideBar drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <MainPage drawerWidth={drawerWidth}/>
    </Box>

  );


}

export default App;
