import styles from './VerticalChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS, 
    CategoryScale, 
    ArcElement,
    Tooltip, 
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale, 
    ArcElement,
    Tooltip, 
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of votes", 
                    data: [12, 1, 15, 6, 3, 9],
                    borderColor: 'rgb(53, 162, 135)',
                    backgroundColor: [
                        'rgba(83, 92, 235, 0.4)',
                        'rgba(53, 192, 235, 0.4)',
                        'rgba(13, 12, 235, 0.4)',
                        'rgba(90, 12, 235, 0.4)',
                        'rgba(53, 12, 235, 0.4)',
                        'rgba(19, 10, 235, 0.4)'
                    ], 
                    borderWidth: 1
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
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </>
    )
}