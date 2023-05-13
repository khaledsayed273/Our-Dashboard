import { Grid, Typography } from '@mui/material';
import React from 'react';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';


function RadarChartComponent() {

    const data = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];

    return (
        <>
            <Typography className='textTitlePage' variant='div' component="div">
                Radar Charts
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
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} xl={5}>
                    <div className='box' style={{ width: "100%", height: "100%", overflow: "auto" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                                <Legend />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>

            </Grid>
        </>
    )
}

export default RadarChartComponent
