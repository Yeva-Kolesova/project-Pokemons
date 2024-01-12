import styled from 'styled-components';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import React from 'react';
import imageMob from '../images/mobileRegistr.webp';
import imageTablet from '../images/tabletRegistr.webp';
import imageDesk from '../images/desctopRegister.webp';

const RegistrationPage = () => {
  return (
    <StyledBox>
      <RegistrationForm />
    </StyledBox>
  );
};

export default RegistrationPage;

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
