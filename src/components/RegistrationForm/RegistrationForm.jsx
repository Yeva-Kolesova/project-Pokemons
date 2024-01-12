// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import * as Yup from 'yup';
import { registerThunk } from '../../reduxConfig/auth/operations';
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
  StyledPasswordIcon,
  StyledRegister,
  StyledTitle,
  StyledUserIcon,
} from './RegistrationForm.styled';
// import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
// import PasswordStrengthBar from 'react-password-strength-bar';

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  // const { register, handleSubmit } = useForm({ resolver });
  const dispatch = useDispatch();
  // const [pass, setPass] = useState('');
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
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
            <StyledUserIcon />
            <StyledInputField
              {...register('username', {
                minLength: {
                  value: 6,
                  message: 'Username must be at least 6 symbols long!',
                },
              })}
              placeholder="Name"
              type="text"
              required
            />
          </StyledInput>
        </StyledLabel>
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
          </StyledInput>
        </StyledLabel>
        <StyledLabel>
          <StyledInput>
            <StyledPasswordIcon />
            <StyledInputField
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 symbols long!',
                },
              })}
              placeholder="Password"
              type="password"
              required
            />
          </StyledInput>
        </StyledLabel>
        <StyledLabel>
          <StyledInput width>
            <StyledPasswordIcon />
            <StyledInputField
              {...register('confirmPassword')}
              placeholder="Confirm password"
              type="password"
              required
            />
          </StyledInput>
        </StyledLabel>
        {/* <input type="text" onChange={e => setPass(e.target.value)} /> */}
        {/* <PasswordStrengthBar password={pass} /> */}
        <StyledRegister type="submit">Register</StyledRegister>
        <StyledLink to="/login">Log in</StyledLink>
      </StyledForm>
    </StyledBoxForm>
  );
};

export default RegistrationForm;
