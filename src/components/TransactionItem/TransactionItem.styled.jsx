import styled from 'styled-components';

export const ListTab = styled.li`
  list-style-type: none;

  @media only screen and (min-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.41);
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (min-width: 1280px) {
    width: 698px;
  }
`;

export const ItemData = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ItemType = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ItemCategory = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ItemComment = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ItemSum = styled.li`
  color: var(--dashboard-text, #ff868d);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border: none;

  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  /* Button shadow */
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  color: var(--white, #fbfbfb);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    border-radius: 18px;
  }

  @media only screen and (min-width: 1280px) {
    border-radius: 20px;
  }
`;
