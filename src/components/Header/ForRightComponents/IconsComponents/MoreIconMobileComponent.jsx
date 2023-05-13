import { IconButton } from '@mui/material'
import MoreIcon from '@mui/icons-material/MoreVert';

import React from 'react'
import { handleMobileMenuOpenFromSlice } from '../../../../redux/slices/HeaderSlice';
import { useDispatch, useSelector } from 'react-redux';

function MoreIconInMobileComponent({handleMobileMenuClose , mobileMenuId}) {

    const store = useSelector((state) => state.HeaderSlice)


    const dispatch = useDispatch()

    const handleMobileMenuOpen = (event) => {
        dispatch(handleMobileMenuOpenFromSlice(event.currentTarget));
    };
    

    const HandleMoreIconInMobile = (event) => {
        if(store.mobileMoreAnchorEl){
            handleMobileMenuClose();
        }else  {
            handleMobileMenuOpen(event)
        }
    }

    return (
        <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={HandleMoreIconInMobile}
            color="inherit"
        >
            <MoreIcon />
        </IconButton>
    )
}

export default MoreIconInMobileComponent
