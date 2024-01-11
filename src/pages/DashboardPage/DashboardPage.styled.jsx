import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const NavAndBalanceWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 32px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    width: 480px;
    position: relative;
    height: calc(100vh - 80px);

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      right: 0;
      background-color: var(--transparency-60);
    }
  }
`;
