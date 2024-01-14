import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'reduxConfig/auth/operations';
import icons from '../../images/icons.svg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  StyledBoxForm,
  StyledEmailIcon,
  StyledErr,
  StyledForm,
  StyledIcon,
  StyledInputBox,
  StyledInputField,
  StyledLabel,
  StyledLink,
  StyledLogin,
  StyledPasswordIcon,
  StyledTitle,
} from './LoginForm.styled';

const userSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email!').required('Required'),
  password: yup.string().min(6).max(12).required('Required'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(logInThunk(data))
      .unwrap()
      .then(res => {
        console.log(`Welcome ${res.user.username}!`);
      })
      .catch(err => {
        console.error(err);
      });
    reset();
  };

  return (
    <StyledBoxForm>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <StyledIcon width={25} height={25}>
          <use href={`${icons}#icon-Logo`} />
        </StyledIcon>
        <StyledTitle>Money Guard</StyledTitle>
        <StyledLabel>
          <StyledInputBox>
            <StyledEmailIcon width={24} height={24} />
            <StyledInputField
              {...register('email')}
              placeholder="E-mail"
              type="text"
              name="email"
            />
          </StyledInputBox>
          <StyledErr>{errors.email?.message}</StyledErr>
        </StyledLabel>
        <StyledLabel>
          <StyledInputBox>
            <StyledPasswordIcon width={24} height={24} />
            <StyledInputField
              {...register('password')}
              placeholder="Password"
              type="password"
              name="password"
            />
          </StyledInputBox>
          <StyledErr>{errors.password?.message}</StyledErr>
        </StyledLabel>
        <StyledLogin>Log in</StyledLogin>

        <StyledLink to="/register">Register</StyledLink>
      </StyledForm>
    </StyledBoxForm>
  );
};

export default LoginForm;
