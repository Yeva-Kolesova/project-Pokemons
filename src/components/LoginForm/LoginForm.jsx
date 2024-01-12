import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'reduxConfig/auth/operations';
import icons from '../../images/icons.svg';

import {
  StyledBoxForm,
  StyledEmailIcon,
  StyledForm,
  StyledIcon,
  StyledInput,
  StyledInputField,
  StyledLabel,
  StyledLink,
  StyledLogin,
  StyledPasswordIcon,
  StyledTitle,
} from './LoginForm.styled';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(logInThunk(data));
  };
  return (
    <StyledBoxForm>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <StyledIcon width={25} height={25}>
          <use href={`${icons}#icon-Logo`} />
        </StyledIcon>
        <StyledTitle>Money Guard</StyledTitle>
        <StyledLabel>
          <StyledInput>
            <StyledEmailIcon />
            <StyledInputField
              {...register('email', {
                minLength: { value: 9, message: 'Email number is too short!' },
              })}
              placeholder="E-mail"
              type="text"
              required
            />
            {errors.email && <span>{errors.email.message}</span>}
          </StyledInput>
        </StyledLabel>
        <StyledLabel>
          <StyledInput>
            <StyledPasswordIcon />
            <StyledInputField
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'Password must be at least 7 symbols long!',
                },
              })}
              placeholder="Password"
              type="password"
              required
            />
            {errors.password && <span>{errors.password.message}</span>}
          </StyledInput>
        </StyledLabel>
        <StyledLogin>Log in</StyledLogin>
        <StyledLink to="/register">Register</StyledLink>
      </StyledForm>
    </StyledBoxForm>
  );
};

export default LoginForm;
