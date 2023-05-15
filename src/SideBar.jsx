import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "./icons/download.png"


function SideBar(props) {

    const container = props.window !== undefined ? () => props.window().document.body : undefined;

    const Lists = [
        {
            id: "DashBoard",
            name: "DashBoard",
            img: "fa-solid fa-table-columns",
            iconMore: "fa-solid fa-caret-down",
            more: [
                {
                    id: "Home",
                    name: "Home",
                    path: "/",
                    img: "fa-solid fa-house"
                },
                {
                    id: "BarChart",
                    name: "Bar Chart",
                    path: "barChart",
                    img: "fa-solid fa-chart-column"
                },
                {
                    id: "LineChart",
                    name: "Line Chart",
                    path: "lineChart",
                    img: "fa-solid fa-chart-line"
                },
                {
                    id: "PieChart",
                    name: "Pie Chart",
                    path: "pieChart",
                    img: "fa-solid fa-chart-pie"
                },
                {
                    id: "RadarChart",
                    name: "Radar Chart",
                    path: "radarChart",
                    img: "fa-regular fa-chart-bar"
                },
            ]
        },
        {
            id: "AllMail2",
            name: "All mail2",
            img: "fa-solid fa-table-columns"
        },
        {
            id: "AllMai3",
            name: "All mail3",
            img: "fa-solid fa-table-columns"


        },
    ]


    const HandleMoreIcon = (item) => {
        if (item.more) {
            const Ele = document.querySelector(`.${item.id}`)

            const Attrebute = Ele.getAttribute("aria-expanded")

            if (Attrebute === "true") {
                Ele.children[0].children[2].classList.add("svgRotate")
            } else {
                Ele.children[0].children[2].classList.remove("svgRotate")
            }

        }
    }


    const drawer = (
        <div>
            <Toolbar sx={{ display: "flex", justifyContent: 'center', padding: "0 !important" }} >

                <Link aria-label='Logo' to="/">
                    <Typography sx={{
                        width: "25px",
                        height: "25px",
                        marginRight: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <img className='w-100 h-100' src={logo} alt="" />
                    </Typography>
                </Link>
            </Toolbar>
            <Divider />
            <List >

                {Lists.map((item) => {
                    return (
                        <div key={item.id}>
                            <List >
                                <ListItem className={item.id} onClick={() => HandleMoreIcon(item)} data-bs-toggle="collapse" data-bs-target={`#${item.id}`} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={{ fontSize: "20px" }}>
                                            <i className={item.img}></i>
                                        </ListItemIcon>

                                        <ListItemText >
                                            {item.name}
                                        </ListItemText>

                                        <Typography className='svgDiv' variant='div' component="div">
                                            {item.more ? (<i style={{ fontSize: "15px", color: "#8e8e8e" }} className={item.iconMore}></i>) : null}
                                        </Typography>

                                    </ListItemButton>
                                </ListItem>
                            </List>

                            <div className="collapse" id={item.id}>
                                {item?.more?.map((item) => {
                                    return (
                                        <List sx={{ marginLeft: "10px" }} key={item.name}>
                                            <Link to={item.path} style={{ textDecoration: "none", color: "white" }}>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <i className={item.img}></i>
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.name} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>
                                        </List>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </List>
        </div>
    );



    return (
        <Box
            component="nav"
            sx={{
                width: { sm: props.drawerWidth }, flexShrink: { sm: 0 }
            }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer

                container={container}
                variant="temporary"
                open={props.mobileOpen}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },

                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default SideBar
