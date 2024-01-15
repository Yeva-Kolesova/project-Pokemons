import styled from 'styled-components';

export const StaledSectionHome = styled.section`
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 768px;
    height: calc(100vh - 470px);
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 46px;
    padding-left: 69px;
    width: 800px;
    height: calc(100vh - 220px);
  }
`;
