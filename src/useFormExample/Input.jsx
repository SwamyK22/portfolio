import React from 'react';

const Input = (props) => {

    const { placeholder, register, name, errors, setError } = props;
    return (
        <div className='inp'>
            <label htmlFor={name}>{placeholder}</label>
            <input
                {...register(name, {
                    required: `Please enter your ${name.toLowerCase()}.`,
                })}
                placeholder={placeholder}

            />
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
}

export default Input;
