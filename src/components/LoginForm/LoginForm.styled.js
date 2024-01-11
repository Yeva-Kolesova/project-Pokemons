import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBoxForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;

  background: #302e8e;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;

export const StyledTitle = styled.p`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 19.111px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 533px;
  max-height: 570px;
`;

export const StyledLabel = styled.label`
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 40px;
`;

export const StyledInput = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 5px 11px;
  border-bottom: 1px solid rgba(55, 65, 81, 1);
`;

export const StyledEmailIcon = styled(MdEmail)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 24px;
  margin-right: 8px;
`;

export const StyledPasswordIcon = styled(IoMdLock)`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-size: 24px;
  margin-right: 8px;
`;

export const StyledInputField = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  background-color: transparent;
  font-size: 18px;
  font-weight: 400;
  color: var(--white-60, rgba(255, 255, 255, 0.6));
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
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
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
`;
