import styled from 'styled-components';

////////////////////////////////////////
export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(34, 13, 91, 0.23);
  width: 100%;
  height: 100vh;

  z-index: 100;
`;
/* backdrop-filter: blur(3.5px);*/
export const ModalContent = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(50px);
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    border-radius: 8px;
    width: 533px;
    height: 447px;
    padding: 60px 117px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const StyledIcon = styled.svg`
  @media only screen and (max-width: 767px) {
    display: none; /* Hide on mobile devices */
  }
  @media only screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
export const StyledTitle = styled.h3`
  @media only screen and (max-width: 767px) {
    display: none; /* Hide on mobile devices */
  }
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
export const Text = styled.p`
  color: #fff;
  font-family: 'Poppins Regular';
  font-size: 18px;
  line-height: normal;
  //   margin: 12px auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;
export const ModalButton = styled.button`
  width: 280px;
  height: 50px;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  /* font-family: Poppins; */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background: var(--button-gradient);
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const ModalButtonCancel = styled.button`
  width: 280px;
  height: 50px;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  /* font-family: Poppins; */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--text-button, #623f8b);
  //   background: var(--button-gradient);
  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;
