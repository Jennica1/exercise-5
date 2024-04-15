import styles from './HorizontalChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend,
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)

export default function HorizontalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",],
            datasets: [
                {
                    label: "Data 1", 
                    data: [1234, 123421, 1532, 4326, 1209, 10823,39201],
                    borderColor: 'rgb(53, 162, 135)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                },
                {
                    label: "Data 2", 
                    data: [1234, 123421, 1532, 4326, 1209, 10823,39201],
                    borderColor: 'rgb(53, 162, 135)',
                    backgroundColor: 'rgba(153, 162, 235, 0.4)'
                },
                {
                    label: "Data 3", 
                    data: [1234, 123421, 1532, 4326, 1209, 10823,39201],
                    borderColor: 'rgb(53, 162, 135)',
                    backgroundColor: 'rgba(240, 162, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true, 
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])
    return(
        <>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </>
    )
}