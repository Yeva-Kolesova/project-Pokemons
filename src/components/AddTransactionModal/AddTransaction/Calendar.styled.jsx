import styled from 'styled-components';
import { FiCalendar } from 'react-icons/fi';

export const DateWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;

  input {
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
  }
`;
export const CalendarIcon = styled(FiCalendar)`
  position: absolute;
  top: -2.5px;
  right: 17px;
  width: 24px;
  height: 24px;
  color: var(--icon-violet, #734aef);

  pointer-events: none;
  @media only screen and (min-width: 768px) {
    right: 8px;
  }
`;
