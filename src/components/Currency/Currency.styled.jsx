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

// import styled from 'styled-components';

// export const StyledBox = styled.div`
//   /* font-family: 'Poppins Regular', sans-serif; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   max-width: ${props => props.maxw || '480px'};
// `;

// export const StyledTable = styled.div`
//   max-height: 170px;
//   width: 100%;
// `;

// export const StyledTableHead = styled.div`
//   background: rgba(82, 59, 126, 0.6);
//   padding-left: ${props => props.padL || '62px'};
//   margin-bottom: ${props => props.marB || '24px'};
// `;

// export const StyledThBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 50px;
//   padding: 16px 0;
// `;

// export const StyledTdBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   text-align: start;
//   gap: 50px;
// `;

// export const StyledTBody = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-left: ${props => props.padL || '62px'};
//   gap: ${props => props.gap || '24px'};
//   margin-bottom: 6px;
// `;

// export const StyledTh = styled.span`
//   color: var(--white, #fbfbfb);
//   /* font-family: 'Poppins SemiBold'; */
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: calc(16 / 24);
//   text-align: center;
//   &:last-child {
//   }
//   &:first-child {
//   }
// `;

// export const StyledTd = styled.span`
//   display: inline-block;
//   color: var(--white, #fbfbfb);
//   /* font-family: 'Poppins Regular'; */
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: calc(24 / 16);
//   text-align: center;
//   width: 62px;
//   &:last-child {
//     width: 42px;
//   }
//   &:first-child {
//     width: 65px;
//   }
// `;

// export const StyledImg = styled.img`
//   display: inline-block;
//   width: ${props => props.w || '480px'};
// `;