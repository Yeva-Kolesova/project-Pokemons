import LoginForm from 'components/LoginForm/LoginForm';

import React from 'react';
import imageMob from '../images/mobileLogin.webp';
import imageTablet from '../images/tabletLogin.webp';
import imageDesk from '../images/desctopLogin.webp';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <StyledBox>
      <LoginForm />
    </StyledBox>
  );
};

export default LoginPage;

const StyledBox = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${imageMob});
  background-color: #101010;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    background-image: url(${imageTablet});
  }

  @media only screen and (min-width: 1280px) {
    background-image: url(${imageDesk});
  }
`;
