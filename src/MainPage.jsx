import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function MainPage({ drawerWidth }) {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Outlet />
        </Box>
    )
}

export default MainPage
