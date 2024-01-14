import styled from 'styled-components';

export const StyledDashboard = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    gap: 16px;
    flex-direction: row;
  }

  @media only screen and (min-width: 1280px) {
    gap: 32px;
  }
`;
