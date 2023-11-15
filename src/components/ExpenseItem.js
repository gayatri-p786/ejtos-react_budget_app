import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}><img src='https://as1.ftcdn.net/v2/jpg/01/45/20/26/1000_F_145202665_dXDnWjIa8amDQJRQBIyqx0EWZnj8Hswk.jpg' height="20" width="20"></img></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6qM2gzKoWS1MV3h5QF7w9mPWByZ5X0VKCExk3LWsty4NvTnGvkQWHfdk85vghc6v7gw&usqp=CAU' height="20" width="20"></img></button></td>        
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
