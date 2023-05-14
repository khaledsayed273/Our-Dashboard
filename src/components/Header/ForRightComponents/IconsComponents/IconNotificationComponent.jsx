import { Badge, IconButton, Typography } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';


function IconNotificationComponent({ HandleNotfication }) {

    const { data } = useSelector((state) => state.APISclice)

    return (
        <Typography onClick={HandleNotfication} variant='div' component="div" sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge
                    badgeContent={data.length}
                    color="error"
                >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Typography>
    )
}

export default IconNotificationComponent
