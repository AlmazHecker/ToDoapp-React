import React, { useState } from 'react';
import './Expenses.css';
import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';



function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    // мы изменяем год в expensesFilter и передаем его сюда(filterChangeHundler передана как пропа)
    // поэтому происходит перезагрузка и показываются отфильтрованные компоненты
    function filterChangeHundler(selectedYear) {
        // TODO: устанавливаем значение которое мы выбрали
        setFilteredYear(selectedYear);
    }

    // код ниже для диаграммы по месяцам(годам)
                    // TODO: props.expenses - данные, переданные с app.js 
    const filteredExpenses = props.expenses.filter( (expense) => { // TODO: фильтруем их через их дату(по годам), 
        return expense.date.getFullYear().toString() === filteredYear;
        // чтобы получить значение равное году, которое мы выбрали в filterChangeHundler 
    })
    // получается filteredexpense - массив с отфильтрованными данными

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHundler} />
            {/* передаем отфильтрованные данные для диаграммы */}
            <ExpensesChart items={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
        )
}

export default Expenses;