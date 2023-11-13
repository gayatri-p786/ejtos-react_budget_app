import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useSelector} from 'react-redux';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const { currency } = useSelector((state) => state.currency.value);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value < totalExpenses) {
            alert("The budget cannot be lower than spending");
            setNewBudget("");
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<div>
<span>{currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
</div>
    );
};
export default Budget;
