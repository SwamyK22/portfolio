import React from 'react'
import { useForm } from 'react-hook-form';
import SimpleForm from './simpleForm';
import { registerFields } from './constants';

function Register() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });
    return (
        <SimpleForm fields={registerFields} handleSubmit={handleSubmit} setError={setError} errors={errors} register={register} />
    )
}

export default Register