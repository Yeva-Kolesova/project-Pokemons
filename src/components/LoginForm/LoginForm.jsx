import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'reduxConfig/auth/operations';
import icons from '../../images/icons.svg';

import {
  StyledBoxForm,
  StyledEmailIcon,
  StyledForm,
  StyledInput,
  StyledInputField,
  StyledLabel,
  StyledLink,
  StyledLogin,
  StyledPasswordIcon,
  StyledTitle,
} from './LoginForm.styled';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(logInThunk(data));
  };
  return (
    <StyledBoxForm>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <svg width={25} height={25}>
          <use href={`${icons}#icon-Logo`} />
        </svg>
        <StyledTitle>Money Guard</StyledTitle>
        <StyledLabel>
          <StyledInput>
            <StyledEmailIcon />
            <StyledInputField
              {...register('email')}
              placeholder="E-mail"
              type="text"
            />
          </StyledInput>
        </StyledLabel>
        <StyledLabel>
          <StyledInput>
            <StyledPasswordIcon />
            <StyledInputField
              {...register('password')}
              placeholder="Password"
              type="text"
            />
          </StyledInput>
        </StyledLabel>
        <StyledLogin>Log in</StyledLogin>
        <StyledLink to="/register">Register</StyledLink>
      </StyledForm>
    </StyledBoxForm>
  );
};

export default LoginForm;
