import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('');
    // const handleCurrencyChange = (event) => {
        
    //     setNewCurrency(event.target.value);
    // }
    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue>(£ Pound)</option>
                        <option value="Marketing" name="Pound"> (£ Pound)</option>
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
