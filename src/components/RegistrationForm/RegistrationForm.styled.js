import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { FaUser } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBoxForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px 20px;
  min-height: 100vh;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));

  @media only screen and (min-width: 768px) {
    width: 533px;
    min-height: 624px;
    padding: 40px 62px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;

    &::before {
      /* background-color: rgba(255, 255, 255, 0.1); */
      content: '';
      backdrop-filter: blur(50px);
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: 8px;
      box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
export const Gradient = styled.div`
  @media only screen and (min-width: 768px) {
    z-index: -20;
    position: absolute;
    width: 454px;
    height: 454px;
    border-radius: 454px;
    background: rgba(47, 21, 176, 0.73);
    filter: blur(100px);
    inset: 0;
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
  font-size: 19.111px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;

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
  min-width: 100%;
  height: 100%;
`;

export const StyledLabelBox = styled.div`
  max-width: 100%;
  /* margin: 0 auto;
  margin-bottom: 40px; */
  position: relative;
  height: 47px;
  margin-bottom: 22px;
`;

export const StyledLabel = styled.label`
  display: block;
  color: rgba(156, 163, 175, 1);
  max-width: 100%;
`;

export const StyledInputBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--white-40, rgba(255, 255, 255, 0.4));

  max-width: 100%;
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 409px;
  }
`;

export const StyledUserIcon = styled(FaUser)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  width: 18px;
  height: 16px;
  margin-left: 12px;
`;

export const StyledEmailIcon = styled(MdEmail)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 24px;
  margin-left: 12px;
`;

export const StyledPasswordIcon = styled(IoMdLock)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 24px;
  margin-left: 12px;
`;

export const StyledInputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 18px;
  font-weight: 400;
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  padding: 5px 11px;
`;

export const StyledErr = styled.p`
  margin-left: 12px;
  padding-top: 7px;
  color: rgb(255, 134, 141);
  font-size: 14px;
  font-weight: 500;
`;

export const StyledSpan = styled.span`
  width: 280px;
  max-width: 100%;
  margin-top: -40px;
  @media only screen and (min-width: 768px) {
    width: 409px;
  }
`;

export const StyledRegister = styled.button`
  margin-top: 40px;
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
  &:hover {
    background: linear-gradient(
      97deg,
      #1f96ff -16.42%,
      #7931cb 97.04%,
      #e3a7fb 150.71%
    );
    backdrop-filter: blur(50px);
  }
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

  &:hover {
    background: linear-gradient(
      97deg,
      #1f96ff -16.42%,
      #7931cb 97.04%,
      #e3a7fb 150.71%
    );
    backdrop-filter: blur(50px);
    color: var(--white, #fbfbfb);
  }
  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }
`;
