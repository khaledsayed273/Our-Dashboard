import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleMenuClose } from '../../../redux/slices/HeaderSlice';

function RenderMenuComponent({ menuId, handleProfileMenuClose }) {
    
    const despatch = useDispatch()

    const store = useSelector((state) => state.HeaderSlice)


    const isMenuOpen = Boolean(store.anchorEl);



    const HandleClose = () =>{
        handleProfileMenuClose()
        despatch(handleMenuClose())
    }
    

    return (
        <Menu
            anchorEl={store.anchorEl}
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
            open={isMenuOpen}
            onClose={HandleClose}

        >
            <Link className='link' to="profile">
                <MenuItem onClick={handleProfileMenuClose} >My Profile</MenuItem>
            </Link>
            <Link className='link'>
                <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
            </Link>

        </Menu>
    )
}

export default RenderMenuComponent
