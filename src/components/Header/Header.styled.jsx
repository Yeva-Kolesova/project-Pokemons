import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.25),
    0 -3px 2px 0 rgba(0, 0, 0, 0.1) inset;

  @media only screen and (min-width: 768px) {
    height: 80px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 12.84px;
    line-height: 1.51;
    color: #fbfbfb;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 17.1px;
    }

    svg {
      width: 23.489px;
      height: 22.468px;
    }
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--transparency-60);
  text-align: right;
  font-size: 16px;
  line-height: 1.33;

  span {
    font-size: 16px;
    position: relative;
  }

  @media only screen and (min-width: 768px) {
    gap: 24px;

    span {
      &::after {
        content: '';
        height: 30px;
        width: 1px;
        position: absolute;
        right: -12px;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--transparency-60);
        border-radius: 2px;
      }
    }
  }
`;

export const StyledExit = styled.button`
  background-color: transparent;
  border: none;
  color: var(--transparency-60);
  display: flex;
  align-items: center;
  padding: 0;
  gap: 8px;

  transition: color 250ms ease-in-out;

  &:hover {
    color: var(--icon-violet);
  }
`;
