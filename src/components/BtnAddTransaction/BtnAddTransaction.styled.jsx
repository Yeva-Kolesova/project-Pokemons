import styled from 'styled-components';

export const BtnOpenModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 44px;
  height: 44px;
  bottom: 30px;
  right: 30px;
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

  &:hover {
    background: linear-gradient(
      97deg,
      #1f96ff -16.42%,
      #7931cb 97.04%,
      #e3a7fb 150.71%
    );
  }
`;
