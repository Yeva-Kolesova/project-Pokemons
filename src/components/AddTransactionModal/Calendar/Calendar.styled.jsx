import styled from 'styled-components';
import { FiCalendar } from 'react-icons/fi';

export const DateWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
  }
  input {
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 400;
    width: 280px;
    padding-left: 20px;
    @media only screen and (min-width: 768px) {
      width: 181px;
    }
  }
`;

export const CalendarS = styled.div`
  overflow: hidden;
`;

export const CalendarIcon = styled(FiCalendar)`
  position: absolute;
  top: -2.5px;
  right: 17px;
  width: 24px;
  height: 24px;
  color: var(--icon-violet, #734aef);
  pointer-events: none;
`;
