import styled from 'styled-components';

export const AdaptiveContainer = styled.div`
  margin: 0 auto;
/*  flex-grow: 1;*/
  width: 100%;
  max-width: 320px;
  padding: 0 20px;

  display: flex;
  /*gap: 20px;*/

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 20px;
  }
`;
