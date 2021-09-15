import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategoria = ({ setCategoria }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const handleInputChenge = ({ target }) =>{

        setInputValue(target.value);

    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        if( inputValue.trim().length > 2 ){

            setCategoria( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit } >
                <div className='col-md-3'>
                    <label className='text-info'>Categoria</label>
                    <input 
                        type="text" 
                        className='form-control'
                        value={ inputValue } 
                        onChange={ handleInputChenge }
                        placeholder='Ingrese una categoria'
                    />
                </div>
            </form>
        </>
    )
}

AddCategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired

}

export default AddCategoria
