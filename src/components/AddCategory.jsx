import PropTypes from 'prop-types';
import checkPropTypes from 'prop-types/checkPropTypes';
import '@testing-library/jest-dom';
import { useState } from "react"

const AddCategory = ({onNewCategory}) => {

    // Validación manual de props (React 19)
    checkPropTypes(AddCategory.propTypes, { onNewCategory }, "prop", "AddCategory");

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {{
        setInputValue(target.value);
    }}

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [inputValue, ...categories]); // Forma de hacerlo, pero no es la mejor
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};

export default AddCategory
