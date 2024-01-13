import styled from 'styled-components';

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  margin-left: -16px;
  color: #fbfbfb
`;

export const CurrencyTable = styled.div`
  max-height: 170px;
  width: 100%;
`;

export const CurrencyTableHead = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  padding: 16px 0;
  margin: 0 auto 24px;
  background-color: rgba(93, 78, 161, 0.6);
  width: 480px;
`;

export const CurrencyTableBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
`;

export const CurrencyTableBodyList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 62px
  gap: 24px;
  margin-bottom: 14px;
`;

export const CurrencyTableHeadItem = styled.li`
  color: #fbfbfb
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const CurrencyTableItem = styled.li`
  display: inline-block;
  color: #fbfbfb
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  width: 62px;
  &:last-child {
    width: 42px;
  }
  &:first-child {
    width: 65px;
  }
`;


export const CurrecnyDiagram = styled.img`
  display: block;
    /* max-width: 100%; */
    height: auto;
    width: 496px;
    max-height: 167px;
`