import React, { useState } from 'react'
import PropTypes  from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState(''); // initialze value to aviod undefinied
    
    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputValue(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        

        if (inputValue.length > 2) {
            // We can use the previos data in categories only passing the setCategory function
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                onChange={ handleInputChange }
                value={inputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
