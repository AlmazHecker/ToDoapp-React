import React from "react"
import Chart from "../Chart/Chart"

function ExpensesChart (props){
    // Label - name, value их шкала
    const chartDataPoints = [
        {label:"Jan", value: 0},
        {label:"Feb", value: 0},
        {label:"Mar", value: 0},
        {label:"Apr", value: 0},
        {label:"May", value: 0},
        {label:"Jun", value: 0},
        {label:"Jul", value: 0},
        {label:"Aug", value: 0},
        {label:"Sep", value: 0},
        {label:"Oct", value: 0},
        {label:"Nov", value: 0},
        {label:"Dec", value: 0},
    ]
                        // TODO: props.items - данные которые прошли фильтрацию по годам
    for (const expense of props.items) {
        // getMonth - получает номер месяца, и передает их в перем expenseMonth
        // TODO: получается expenseMonth = номер месяца
        const expenseMonth = expense.date.getMonth() // January => 0
        // через ExpenseMonth(P.S это номер месяца) 
        // мы указываем в какое свойство массива добавить цены
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    // TODO: передаем массив с отфильтрованные данными в компонент Chart
    return <Chart dataPoints={chartDataPoints} />

}

export default ExpensesChart;