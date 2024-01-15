import styled from 'styled-components';

export const BtnOpenModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 44px;
  height: 44px;
  bottom: 20px;
  border-radius: 50%;
  color: #fbfbfb;
  border: none;
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  cursor: pointer;
  z-index: 10;
  align-self: flex-end;

  &:hover {
    background: linear-gradient(
      97deg,
      #7000ff -16.42%,
      #9e40ba 97.04%,
      #ffc727 150.71%
    );
  }

  @media only screen and (min-width: 768px) {
    bottom: 100px;
    margin-right: 12px;
  }

  @media only screen and (min-width: 1280px) {
    bottom: 50px;
    margin-right: 0;
  }
`;
