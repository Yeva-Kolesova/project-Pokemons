import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInThunk } from 'reduxConfig/auth/operations';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(logInThunk(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <input {...register('email')} placeholder="E-mail" type="text" />
        </label>
        <label>
          <input {...register('password')} placeholder="Password" type="text" />
        </label>
        <button>Log in</button>
        <Link>Register</Link>
      </form>
    </div>
  );
};

export default LoginForm;
