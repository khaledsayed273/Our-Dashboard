import { Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchComponent from './components/Header/SearchComponent';
import RenderMenuMobileComponent from './components/Header/ForRightComponents/RenderMenuMobileComponent';
import RenderMenuComponent from './components/Header/ForRightComponents/RenderMenuComponent';
import RightComponents from './components/Header/RightComponents';
import { useDispatch } from 'react-redux';
import { HandleClose, handleMobileMenuOpenFromSlice } from './redux/slices/HeaderSlice';

function NavBar({ drawerWidth, setDrawerWidth, handleDrawerToggle }) {

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const dispatch = useDispatch()

    const handleDrawer = () => {
        if (window.innerWidth >= 600 && drawerWidth === 240) {
            setDrawerWidth(60)
        } else {
            setDrawerWidth(240)
        }
    }

    const handleMobileMenuClose = () => {
        dispatch(handleMobileMenuOpenFromSlice(false));
        dispatch(HandleClose(false));
    };

    const handleProfileMenuClose = () => {
        dispatch(HandleClose())
    }
    

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawer}
                        sx={{ mr: 2, display: { sm: 'block', xs: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>


                    <Typography variant="div" component="div" sx=
                        {{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "2px 0",
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <Typography variant="div" component="div">

                            <SearchComponent />

                        </Typography>

                        <Typography variant="div" component="div">
                            <RightComponents mobileMenuId={mobileMenuId} menuId={menuId} />
                        </Typography>

                    </Typography>


                </Toolbar>
            </AppBar>
            <RenderMenuMobileComponent
                handleMobileMenuClose={handleMobileMenuClose}
                // HandleNotfication={HandleNotfication}
                mobileMenuId={mobileMenuId}
            />
            <RenderMenuComponent menuId={menuId}
                handleProfileMenuClose={handleProfileMenuClose}

            />
            {/* {Notification ? <NotificationsComponent /> : null} */}
        </>

    )
}

export default NavBar
