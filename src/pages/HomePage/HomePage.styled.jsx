import styled from 'styled-components';

export const StaledSectionHome = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 715px;
    height: calc(100vh - 470px);
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 46px;
    padding-left: 69px;
    width: 785px;
    height: calc(100vh - 220px);
  }
`;
