import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../reduxConfig/auth/operations';

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <input {...register('name')} placeholder="Name" type="text" />
        </label>
        <label>
          <input {...register('email')} placeholder="E-mail" type="text" />
        </label>
        <label>
          <input {...register('password')} placeholder="Password" type="text" />
        </label>
        <label>
          <input
            {...register('password')}
            placeholder="Confirm password"
            type="text"
          />
        </label>
        <button>Register</button>
        <Link>Log in</Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
