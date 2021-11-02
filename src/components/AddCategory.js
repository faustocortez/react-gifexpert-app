import React, { useState } from 'react'

export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState('Hola mundo');
    
    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputValue(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
