import styled from 'styled-components';

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% + 16px);
  margin-left: -16px;
  color: #fbfbfb;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.25);


  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    width: 336px;
  }


  @media only screen and (max-width: 769px) {
    width: 336px;
    border-radius: 0px 0px 8px 8px;
    background: rgba(74, 86, 226, 0.10);
  }

  @media only screen and (max-width: 425px) {
    width: 320px;
    margin-top: 0;
    margin-left:-20px;
  }
`;

export const CurrencyTable = styled.div`
  max-height: 170px;
  width: 100%;
  margin-bottom: 24px;

  @media only screen and (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 320px) {
    width: 320px;
  }
`;

export const CurrencyHeadWrapper = styled.div`
  background: rgba(103, 77, 166, 0.7);
`

export const CurrencyTableHead = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 55px;
  padding: 19px 0;
  margin: 0 auto 24px;
  width: 480px;
  margin-left: 58px;

  @media only screen and (max-width: 1280px) {
    width:336px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 15px 0;
    gap: 58px;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 0 8px 10px;
  }

  @media only screen and (max-width: 320px) {
    gap: 52px;
  }
  
`;

export const CurrencyTableBody = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;

  @media only screen and (max-width: 1024px) {
    gap: 65px;
  }

  @media only screen and (max-width: 320px) {
    gap: 57px;
  }

`;

export const CurrencyTableBodyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 14px ;
  margin-left: 68px;
  
  @media only screen and (max-width: 1024px) {
    margin-left: 15px;
    margin-bottom: 0;
    gap: 12px;
  }
`;

export const CurrencyTableHeadItem = styled.li`
  color: #fbfbfb;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const CurrencyTableItem = styled.li`
  display: inline-block;
  font-family: "Poppins", sans-serif;
  color: #fbfbfb
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  width: 62px;
  font-weight: 400;
  &:last-child {
    width: 42px;
  }
  &:first-child {
    width: 65px;
  }
`;


export const CurrecnyDiagram = styled.div`
  position: relative;
  display: block;
  height: auto;
  max-height: 185px;
  
   @media only screen and (max-width: 1281px) {
      max-width:480px;
    }

  img {

     @media only screen and (max-width: 1281px) {
      width:480px;
      max-height:167px;
    }
  }

  
`

export const LowerNumber = styled.p`
  position: absolute;
  top: 12px;
  left: 48px;

  color: #FF868D;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;

  @media only screen and (max-width: 1024px) {
    display:none;
  }
`

export const HigherNumber = styled.p`
  position: absolute;
  top: -21px;
  right: 97px;

  color: #FF868D;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;

  @media only screen and (max-width: 1024px) {
    display:none;
  }
`