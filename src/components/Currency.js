import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('');
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = () => {
        dispatch({
                type: 'CHG_CURRENCY',
                payload: currency,
            });
    };
    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend alert alert-success">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select alert alert-success" id="inputGroupSelect01" onChange={event => {setCurrency(event.target.value); handleCurrencyChange()}}>
                        <option defaultValue>(£ Pound)</option>
                        <option value="£" name="Pound"> (£ Pound)</option>
                <option value="$" name="Dollar">($ Dollar)</option>
                <option value="€" name="Euro">(€ Euro)</option>
                <option value="₹" name="Rupee">(₹ Rupee)</option>
                  </select>

                </div>
                </div>

        </div>
    );
};
export default Currency;
