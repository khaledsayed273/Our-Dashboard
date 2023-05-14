import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

import { useSelector } from 'react-redux'


function NotificationsComponent() {

    const { data } = useSelector((state) => state.APISclice)
    



    return (
        <Typography variant='div' component="div" className='NotificationComp'
            sx={{
                background: "#3d3c3c",
                maxHeight: "400px",
                position: "absolute",
                right: '5px',
                top: "64px",
                boxShadow: "0px 0px 10px 1px #2b2b2b",
                overflow: "auto",
                zIndex: "999 !important",
                

            }}>

            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    color: "white",
                    padding: "0"
                }}
            >
                {data?.map((item) => (
                    <ListItem key={item.id} sx={{ background: "#1d1d1d", margin: "2px 0" }} >
                        <ListItemAvatar>
                            <Avatar>
                                <img src={item.avatar} alt="" />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography variant='div' component="div">
                            <ListItemText primary={item.name} />
                            <Typography sx={
                                {
                                    fontFamily: "Roboto , Helvetica , Arial ,sans-serif",
                                    fontWeight: 400,
                                    fontSize: "0.875rem",
                                    lineHeight: "1.43",
                                    letterSpacing: "0.01071em",
                                    color: "white",
                                }
                            }>{item.email}
                            </Typography>
                        </Typography>
                    </ListItem>
                ))}

            </List>
        </Typography >
    )
}

export default NotificationsComponent
