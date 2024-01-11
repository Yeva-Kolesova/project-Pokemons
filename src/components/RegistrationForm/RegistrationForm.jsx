import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../reduxConfig/auth/operations';
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

const RegistrationForm = () => {
  // const { password } = this.state;
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };

  return (
    <StyledBoxForm>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <StyledTitle>Money Guard</StyledTitle>
        <StyledLabel>
          <StyledInput>
            <StyledUserIcon />
            <StyledInputField
              {...register('username')}
              placeholder="Name"
              type="text"
            />
          </StyledInput>
        </StyledLabel>
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
