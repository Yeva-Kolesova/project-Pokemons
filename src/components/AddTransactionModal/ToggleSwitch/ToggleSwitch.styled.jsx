import styled from 'styled-components';

export const LabelToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;
export const InputToggle = styled.input`
  display: none;
  &:checked + ::before {
    transform: translateX(40px);
    background-color: #ff868d;
    content: '-';
  }
`;

export const SpanToggle = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #fff;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '+';
    left: -1px;
    top: -1px;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    background: var(--yellow, #ffb627);
    box-shadow: 0px 6px 15px 0px rgba(255, 199, 39, 0.5);
    transition: transform 0.3s ease;
  }
`;
