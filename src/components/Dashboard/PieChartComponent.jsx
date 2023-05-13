import { Typography } from '@mui/material'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';


function PieChartComponent() {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];

    return (
        <>
            <Typography className='textTitlePage' variant='div' component="div">
                Pie Charts
            </Typography>

            <Grid className='gridLineChart'
                container spacing={10}
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >

                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart >
                                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart >
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>
                
            </Grid>

            <Grid className='gridLineChart mt-1'
                container spacing={10}
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >

                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart >
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart >
                                <Pie
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={0}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>
        
            </Grid>

        </>
    )
}

export default React.memo(PieChartComponent)
