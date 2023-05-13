import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function IconProfileComponent({handleProfileMenuOpen , menuId , HandleClose}) {

    const store = useSelector((state) => state.HeaderSlice)

    const HandleClick = (e) => {
        if(store.anchorEl){
            HandleClose()
        }else{
            handleProfileMenuOpen(e)
            
        }

    }

    return (
        <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={HandleClick}
            color="inherit"
        >
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
        </IconButton>
    )
}

export default IconProfileComponent
