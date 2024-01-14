import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerThunk } from '../../reduxConfig/auth/operations';
import icons from '../../images/icons.svg';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
// import PasswordStrengthBar from 'react-password-strength-bar';
import {
  Gradient,
  StyledBoxForm,
  StyledEmailIcon,
  StyledErr,
  StyledForm,
  StyledIcon,
  StyledInputBox,
  StyledInputField,
  StyledLabel,
  StyledLabelBox,
  StyledLink,
  StyledPasswordIcon,
  StyledRegister,
  StyledSpan,
  StyledTitle,
  StyledUserIcon,
} from './RegistrationForm.styled';
import { toast } from 'react-toastify';

const userSchema = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email!').required('Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters!')
    .max(12, 'Password must be at most 12 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
});

const RegistrationForm = () => {
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

  const [pass, setPass] = useState('');

  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.username}!`);
      })
      .catch(err => {
        toast.error(err);
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
        <StyledLabelBox>
          <StyledLabel>
            <StyledInputBox>
              <StyledUserIcon width={24} height={24} />
              <StyledInputField
                {...register('username')}
                placeholder="Name"
                type="text"
                name="username"
              />
            </StyledInputBox>
            <StyledErr>{errors.username?.message}</StyledErr>
          </StyledLabel>
        </StyledLabelBox>
        <StyledLabelBox>
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
        </StyledLabelBox>
        <StyledLabelBox>
          <StyledLabel>
            <StyledInputBox>
              <StyledPasswordIcon width={24} height={24} />
              <StyledInputField
                {...register('password')}
                placeholder="Password"
                type="password"
                name="password"
                onChange={e => setPass(e.target.value)}
              />
            </StyledInputBox>
            <StyledErr>{errors.password?.message}</StyledErr>
          </StyledLabel>
        </StyledLabelBox>
        <StyledLabelBox>
          <StyledLabel>
            <StyledInputBox>
              <StyledPasswordIcon width={24} height={24} />
              <StyledInputField
                {...register('confirmPassword')}
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
              />
            </StyledInputBox>
            <StyledErr>{errors.confirmPassword?.message}</StyledErr>
          </StyledLabel>
        </StyledLabelBox>

        <StyledSpan>
          <PasswordStrengthBar
            password={pass}
            style={{
              marginTop: '8px',
            }}
            scoreWordStyle={{
              display: 'none',
            }}
            isRequired={'true'}
            max={userSchema.fields.password.max}
          />
        </StyledSpan>
        <StyledRegister>Register</StyledRegister>

        <StyledLink to="/login">Log in</StyledLink>
      </StyledForm>
    </StyledBoxForm>
  );
};

export default RegistrationForm;
