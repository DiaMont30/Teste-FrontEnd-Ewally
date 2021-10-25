import React from "react";
import { Bar } from 'react-chartjs-2'
import { format } from 'date-fns'

export const BarChart = ({data}) => {
    const allDates =  data?.map(statment => statment.createdAt)
    const allDays = allDates?.map(date => format(new Date(date), 'dd'))

    const getValues = (dates, data) => {
        let positive = 0
        let negative = 0

        for(let i = 0; i < dates?.length; i++) {
            const found = data.find(item => item.createdAt === dates[i])
            if(found.amount >= 0){
                positive = positive + found.amount
            } else {
                negative = negative + found.amount
            }
        }
        return {positive, negative}
    }
    console.log(getValues(allDates, data))

    return (
    <div>
        <Bar 
          data={{
            labels: [...new Set(allDays)],
            datasets: [{
                label: 'saídas',
                data: [-10, -19, -3, -50, -20, -34, -100, -40, -100, -54, -66],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'entradas',
                data: [12, 19, -32, 51, 2, 31, 150, 90, 1, 92, 40, 89],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }],
        }}
          options={{
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
          }}
         />
    </div>
    )
}