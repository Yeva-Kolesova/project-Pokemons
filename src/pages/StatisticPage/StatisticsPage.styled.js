import styled from 'styled-components';

export const StyledContainer = styled.div`
  color: #fbfbfb;
  font-family: Poppins;
  font-size: 30px;

  h2 {
    padding-bottom: 8px;
  }

  @media only screen and (min-width: 768px) {
    h2 {
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
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledTable = styled.div`
  display: flex;
`;
