import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


function BarChartComponent() {

    const data = [
        {
            name: '2015',
            uv: 1500,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2016',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '2017',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '2018',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '2019',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '2020',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '2021',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '2022',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '2023',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const colors = [
        '#0088FE',
        '#00C49F',
        '#FFBB28',
        '#FF8042',
        'red',
        'pink',
        "white",
        "green"
    ];


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <>
        <Typography className='textTitlePage' variant='div' component="div">
            Bar Charts
        </Typography>
            <Grid className='gridLineChart' sx={{
                display: "flex",
                justifyContent: "center"
            }} container spacing={10}>
                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart

                                data={data}
                                margin={{
                                    top: 15,
                                    right: 30,

                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">

                            <BarChart

                                data={data}
                                margin={{
                                    top: 15,
                                    right: 30,

                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                                <Bar dataKey="uv" fill="#ffc658" />
                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                </Grid>
            </Grid>

            <Grid className='gridLineChart mt-1' sx={{
                display: "flex",
                justifyContent: "center"
            }} container spacing={10}>
                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart

                                data={data}
                                margin={{
                                    top: 15,
                                    right: 30,

                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">

                            <BarChart

                                data={data}
                                margin={{
                                    top: 15,
                                    right: 30,

                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#6c757d' }} />

                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                </Grid>
            </Grid>

        </>
    )
}

export default BarChartComponent
