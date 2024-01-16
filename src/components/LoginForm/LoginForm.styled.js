import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

export const StyledBoxForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 23px 20px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));

  @media only screen and (min-width: 768px) {
    width: 533px;
    height: 570px;
    padding: 80px 62px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;

    &::before {
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
    margin: 0 auto;
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
  min-width: 100%;
`;

export const StyledLabel = styled.label`
  color: rgba(156, 163, 175, 1);
  max-width: 100%;
  position: relative;
  height: 45px;
  margin-bottom: 40px;
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
  position: relative;
`;

export const StyledEye = styled.button`
  position: absolute;
  top: 2px;
  right: 6px;
  background-color: transparent;
  border: none;
`;

export const StyledNoEyeIcon = styled(VscEyeClosed)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 25px;
`;

export const StyledEyeIcon = styled(VscEye)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 27px;
`;

export const StyledErr = styled.p`
  margin-left: 12px;
  padding-top: 6px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  font-weight: 500;
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
  transition: scale 250ms ease-in-out,
  box-shadow 250ms ease-in-out;

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
    scale: 0.99;
    box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.5);
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

  transition: scale 250ms ease-in-out,
  box-shadow 250ms ease-in-out;

  &:hover {
    scale: 0.99;
    box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }
`;
