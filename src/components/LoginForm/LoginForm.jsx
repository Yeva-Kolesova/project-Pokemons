import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'reduxConfig/auth/operations';
import icons from '../../images/icons.svg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Gradient,
  StyledBoxForm,
  StyledEmailIcon,
  StyledErr,
  StyledEye,
  StyledEyeIcon,
  StyledForm,
  StyledIcon,
  StyledInputBox,
  StyledInputField,
  StyledLabel,
  StyledLink,
  StyledLogin,
  StyledNoEyeIcon,
  StyledPasswordIcon,
  StyledTitle,
} from './LoginForm.styled';
import { toast } from 'react-toastify';

const userSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email!').required('Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters!')
    .max(12, 'Password must be at most 12 characters')
    .required('Required'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(userSchema),
  });

  const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);
  const togglePassVisibility = () => setShowPass(!showPass);
  const thisEye = !showPass ? { type: 'password' } : { type: 'text' };

  const submit = data => {
    dispatch(logInThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.username}!`);
      })
      .catch(err => {
        toast.error('Login failed. Please check your credentials.');
      });

    reset();
  };

  return (
    <StyledBoxForm>
      <Gradient />
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
              name="password"
              {...thisEye}
            />
            <StyledEye type="button" onClick={togglePassVisibility}>
              {!showPass ? <StyledEyeIcon /> : <StyledNoEyeIcon />}
            </StyledEye>
          </StyledInputBox>
          <StyledErr>{errors.password?.message}</StyledErr>
        </StyledLabel>
        <StyledLogin type="submit">Log in</StyledLogin>

        <StyledLink to="/register">Register</StyledLink>
      </StyledForm>
    </StyledBoxForm>
  );
};

export default LoginForm;
