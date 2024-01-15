import styled from 'styled-components';
import { FiCalendar } from 'react-icons/fi';

export const DateWrapper = styled.div`
  position: relative;
  display: flex;

  @media only screen and (min-width: 768px) {
  }
  input {
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 400;
    width: 280px;
    padding-left: 20px;
    padding-bottom: 8px;
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);

    @media only screen and (min-width: 768px) {
      width: 181px;
      padding-left: 20px !important;
    }
  }
`;

export const CalendarContainer = styled.div`
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
  @media only screen and (min-width: 768px) {
    right: 8px;
  }
`;
