import React from 'react';
import Input from './Input';
import { useForm } from 'react-hook-form';

const SimpleForm = ({ fields, handleSubmit, setError, errors, register }) => {



    const doSomthing = () => {
        setError("username", {
            type: "manual",
            message: "Dont Forget Your Username Should Be Cool!",
        })
    }

    const onSubmit = (val) => {
        console.log('val', val);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(x => (
                <Input key={x.name} {...x} errors={errors} register={register} setError={setError} />
            ))}
            <button type='submit'>submit</button>
        </form>
    );
}

export default SimpleForm;
