import { Typography } from '@mui/material'
import React from 'react'
import IconNotificationComponent from './ForRightComponents/IconsComponents/IconNotificationComponent'
import IconProfileComponent from './ForRightComponents/IconsComponents/IconProfileComponent'
import MoreIconInMobileComponent from './ForRightComponents/IconsComponents/MoreIconMobileComponent'
import { handleProfileMenuOpenFromSlice, handleMobileMenuClose, handleMenuClose, HandleNotfication } from '../../redux/slices/HeaderSlice'
import { useDispatch } from 'react-redux'

function RightComponents({ menuId, mobileMenuId }) {

    const dispatch = useDispatch()
    const handleProfileMenuOpen = (event) => {
        dispatch(handleProfileMenuOpenFromSlice(event.currentTarget));
    };

    const handleMobileMenuCloseFun = () => {
        dispatch(handleMobileMenuClose());
    };

    const HandleClose = () => {
        handleMobileMenuClose()
        dispatch(handleMenuClose())
    }

    const HandleNotficationFun = () => {
        dispatch(HandleNotfication())
    }


    return (
        <>

            <Typography variant='div' component="div" sx={{ display: { xs: 'none', md: 'flex' } }}>

                <IconNotificationComponent
                    HandleNotfication={HandleNotficationFun}
                />
                <IconProfileComponent
                    menuId={menuId}
                    handleProfileMenuOpen={handleProfileMenuOpen}
                    HandleClose={HandleClose}
                />
            </Typography>
            <Typography variant='div' component="div" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MoreIconInMobileComponent
                    handleMobileMenuClose={handleMobileMenuCloseFun}
                    mobileMenuId={mobileMenuId}
                />
            </Typography>

        </>
    )
}

export default RightComponents
