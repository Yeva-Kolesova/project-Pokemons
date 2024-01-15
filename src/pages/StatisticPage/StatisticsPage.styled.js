import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  h2 {
    padding-bottom: 8px;
    color: #fbfbfb;
    font-size: 30px;
    font-weight: 400;
  }

  @media only screen and (min-width: 768px) {
    h2 {
      font-style: 30px;
      padding-bottom: 20px;
    }
  }

  @media only screen and (min-width: 1280px) {
    padding: 32px 0 46px 69px;

    h2 {
      padding: 0 0 20px 15px;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: -45px;
    width: 336px;
  }
`;
