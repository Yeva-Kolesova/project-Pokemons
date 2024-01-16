import styled from 'styled-components';

export const StyledBalanceContainer = styled.div`
  height: 80px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.60);
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.25);
  //backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 32px;
  padding-top: 12px;

  @media only screen and (min-width: 1280px) {
    border-radius: 0;
    padding-left: 40px;
    width: calc(100% + 16px);
    margin-left: -16px;
  }
`;

export const StyledH = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1.09;
  color: var(--transparency-40);
  font-weight: 400;
  height: 9px;
`;

export const BalanceValue = styled.p`
  color: var(--white);
  font-size: 30px;
  line-height: 1.2;
  font-family: 'Poppins-Bold', sans-serif;
  font-weight: 700;
  height: 36px;

  span{
    font-family: 'Poppins-Regular', sans-serif;
    font-weight: 400;
  }
`;
