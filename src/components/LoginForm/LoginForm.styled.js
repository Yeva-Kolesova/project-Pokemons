import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBoxForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px 20px;
  width: 100%;
  max-height: 100vh;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--Form-color, rgba(255, 255, 255, 0.1));

  @media only screen and (min-width: 768px) {
    width: 533px;
    height: 624px;
    padding: 40px 62px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(50px);

    border-radius: 8px;
  }
`;

export const StyledIcon = styled.svg`
  font-size: 25px;
  @media only screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const StyledTitle = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 52px;
  @media only screen and (min-width: 768px) {
    font-size: 26.963px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 40px;
  max-width: 320px;
  @media only screen and (min-width: 768px) {
    min-width: 100%;
  }
`;

export const StyledInputBox = styled.div`
  position: relative;
  max-width: 280px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(55, 65, 81, 1);
  @media only screen and (min-width: 768px) {
    max-width: 409px;
  }
`;

export const StyledEmailIcon = styled(MdEmail)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 24px;
`;

export const StyledPasswordIcon = styled(IoMdLock)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 24px;
`;

export const StyledInputField = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  background-color: transparent;
  font-size: 18px;
  font-weight: 400;
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  padding: 5px 11px;
`;

export const StyledErr = styled.p`
  padding-top: 4px;
`;

export const StyledLogin = styled.button`
  border-radius: 20px;
  max-height: 50px;
  padding: 13px 0;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  border: none;

  color: var(--white, #fbfbfb);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  max-width: 280px;
  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  max-width: 280px;
  max-height: 50px;
  padding: 13px 0;
  outline: transparent;
  cursor: pointer;
  margin-top: 20px;

  color: rgba(98, 63, 139, 1);
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;

  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }
`;
