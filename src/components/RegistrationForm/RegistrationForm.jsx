import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import * as Yup from 'yup';
import { registerThunk } from '../../reduxConfig/auth/operations';
import icons from '../../images/icons.svg';
import {
  StyledBoxForm,
  StyledEmailIcon,
  StyledForm,
  StyledInput,
  StyledInputField,
  StyledLabel,
  StyledLink,
  StyledPasswordIcon,
  StyledRegister,
  StyledTitle,
  StyledUserIcon,
} from './RegistrationForm.styled';
// import PasswordStrengthBar from 'react-password-strength-bar';
// const { password } = this.state;

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
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
            <StyledUserIcon />
            <StyledInputField
              {...register('username', {
                required: 'Username is required!',
                minLength: {
                  value: 6,
                  message: 'Username must be at least 6 symbols long!',
                },
              })}
              placeholder="Name"
              type="text"
            />
          </StyledInput>
        </StyledLabel>
        <StyledLabel>
          <StyledInput>
            <StyledEmailIcon />
            <StyledInputField
              {...register('email', {
                required: 'Email is required!',
                minLength: { value: 9, message: 'Email number is too short!' },
              })}
              placeholder="E-mail"
              type="text"
            />
          </StyledInput>
        </StyledLabel>
        <StyledLabel>
          <StyledInput>
            <StyledPasswordIcon />
            <StyledInputField
              {...register('password', {
                required: 'Password is required!',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 symbols long!',
                },
              })}
              placeholder="Password"
              type="text"
            />
          </StyledInput>
        </StyledLabel>
        <StyledLabel>
          <StyledInput>
            <StyledPasswordIcon />
            <StyledInputField
              {...register('confirmPassword')}
              placeholder="Confirm password"
              type="text"
            />
          </StyledInput>
        </StyledLabel>
        {/* <PasswordStrengthBar password={password} /> */}
        <StyledRegister type="submit">Register</StyledRegister>
        <StyledLink to="/login">Log in</StyledLink>
      </StyledForm>
    </StyledBoxForm>
  );
};

export default RegistrationForm;
