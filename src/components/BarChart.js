import React, { useState } from "react";
import { Bar } from 'react-chartjs-2'
import { format } from 'date-fns'

export const BarChart = ({data}) => {
    const [positiveNumbers, setPositiveNumbers] = useState([])
    const allDates =  data?.map(statment => statment.createdAt)
    const allDays = allDates?.map(date => format(new Date(date), 'dd'))

    const getValues = (dates, data) => {
        let newArrayPositive = []
        let newArrayNegative = []

        for(let i = 0; i < dates?.length; i++) {
            const found = data.find(item => item.createdAt === dates[i])
            if(found.amount >= 0){
                newArrayPositive.push(found.amount)
            } else {
                newArrayNegative.push(found.amount) 
            }
        }
        console.log({newArrayPositive, newArrayNegative})
        // const total = newArrayPositive.reduce((total, numero) => total + numero, 0)
        // return total / 100
    }



    console.log(getValues(allDates, data))


    return (
    <div>
        <Bar 
          data={{
            labels: [...new Set(allDays)],
            datasets: [{
                label: 'saídas',
                data: [12, 19, -3, 5, 2, 3],
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
                data: [12, 19, -3, 5, 2, 3],
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