//@ts-check
import React from "react";
import { Bar } from 'react-chartjs-2'
import { format } from 'date-fns'

export const BarChart = ({ statements }) => {
    const allDates = statements?.map(statement => statement.createdAt)
    const allDays = allDates?.map(date => format(new Date(date), 'dd'))

    let transations = allDates?.map((date) => { return { date: date, input: 0, output: 0 } })
    statements?.forEach(statement => {
        const transition = transations.find(transition => transition.date === statement.createdAt)
        statement.amount >= 0 ? transition.input += statement.amount : transition.output += statement.amount
    });

    return (
        <div>
            <Bar
                data={{
                    labels: [...new Set(allDays)],
                    datasets: [{
                        label: 'entradas',
                        data: transations?.map(day => day.input / 100),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'saídas',
                        data: transations?.map(day => day.output / 100),
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