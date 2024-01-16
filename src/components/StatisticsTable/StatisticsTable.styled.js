import styled from 'styled-components';

export const StyledCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 16px 28px;
  border: none;
  border-radius: 8px;
  background-color: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  p {
    color: var(--white);
    font-size: 16px;
    font-family: 'Poppins-SemiBold', sans-serif;
  }
`;

export const StyledListContainer = styled.div`
  width: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #7d31a0;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #942cc5;
  }

  @media only screen and (min-width: 768px) {
    overflow-y: auto;
    height: 100%;
    max-height: calc(100vh - 534px);
  }

  @media only screen and (min-width: 1280px) {
    height: 100%;
    max-height: calc(100vh - 396px);
  }
`;

export const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 28px 14px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  span {
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }

  p {
    color: var(--white);
    font-size: 14px;
    font-weight: 400;
  }
`;

export const StyledNoTransactions = styled.p`
  color: var(--white);
  font-family: 'Poppins-SemiBold', sans-serif;
  padding: 20px 28px 8px;
  text-align: center;
`;

export const StyledExpenses = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px 3px;

  color: var(--white);
  font-size: 14px;
  font-family: 'Poppins-SemiBold', sans-serif;

  p {
    color: #ff868d;
  }
`;

export const StyledIncome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px 45px;

  color: var(--white);
  font-size: 14px;
  font-family: 'Poppins-SemiBold', sans-serif;

  p {
    color: #ffb627;
  }

  @media only screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 13px;
  }
`;
