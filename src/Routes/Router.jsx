import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import LineChartComponent from '../components/Dashboard/LineChartComponent'
import BarChartComponent from '../components/Dashboard/BarChartComponent'
import Home from '../components/Dashboard/Home'
import PieChartComponent from '../components/Dashboard/PieChartComponent'
import RadarChartComponent from '../components/Dashboard/RadarChartComponent'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />
            },
            {
                path: "lineChart",
                element: <LineChartComponent />
            },
            {
                path: "barChart",
                element: <BarChartComponent />
            },
            {
                path: "pieChart",
                element: <PieChartComponent />
            },
            {
                path: "radarChart",
                element: <RadarChartComponent />
            },
        ]
    }
])

export default Router
