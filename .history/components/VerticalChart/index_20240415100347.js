import styles from './VerticalChart.module.css'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js/dist'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    ToolTip, 
    Legend,
    CategoryScale
} from 'chart.js'
import { useEffect, useState } from 'react'

CHartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    ToolTip, 
    Legend
)

export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",],
            datasets: [
                {
                    label: "Sales $", 
                    data: [1234, 123421, 1532, 4326, 1209, 10823,39201],
                    borderColor: 'rgb(53, 162, 135)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true, 
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    return(
        <>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </>
    )
}