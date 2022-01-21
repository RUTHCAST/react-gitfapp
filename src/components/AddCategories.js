import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategories = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSetInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setCategories(cats => [ inputValue, ...cats ]);
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleSetInputValue}
            />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
};

