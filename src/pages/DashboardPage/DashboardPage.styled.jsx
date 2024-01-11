import styled from 'styled-components';

export const SectionContainer = styled.section`

`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media only screen and (min-width: 768px) {
    gap: 20px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    height: calc(100vh - 80px);
  }
`;

export const GradientRight = styled.div`
  width: 893px;
  height: 901px;
  border-radius: 901px;
  background: linear-gradient(220deg, rgba(109, 84, 235, 0.60) 28.31%, rgba(101, 35, 146, 0.60) 66.76%);
  filter: blur(200px);
  position: absolute;
  top: 197px;
  left: 682px;
`;

export const GradientLeftBottom = styled.div`
  width: 760px;
  height: 766px;
  border-radius: 766px;
  background: linear-gradient(207deg, #341FA0 46.11%, #652392 63.65%);
  filter: blur(200px);
  position: absolute;
  top: 189px;
  right: 700px;
`;

export const GradientLeftTop = styled.div`
  width: 739px;
  height: 745px;
  border-radius: 745px;
  background: linear-gradient(220deg, rgba(109, 84, 235, 0.60) 28.31%, rgba(101, 35, 146, 0.60) 66.76%);
  filter: blur(200px);
  position: absolute;
  top: -244px;
  right: 748px;
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
