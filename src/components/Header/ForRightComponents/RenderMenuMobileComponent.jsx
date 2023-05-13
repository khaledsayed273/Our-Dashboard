import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function RenderMenuMobileComponent({ menuId , handleMobileMenuClose }) {

    const store = useSelector((state) => state.HeaderSlice)

    const isMobileMenuOpen = Boolean(store.mobileMoreAnchorEl);
    return (
        <Menu
            anchorEl={store.mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            className={"red"}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
        // onClose={handleMenuClose}
        >
            <Link className='link' to="profile">
                <MenuItem onClick={handleMobileMenuClose}>My Profile</MenuItem>
            </Link>
            <Link className='link'>
                <MenuItem onClick={handleMobileMenuClose} >My account</MenuItem>
            </Link>

        </Menu>
    )
}

export default RenderMenuMobileComponent
