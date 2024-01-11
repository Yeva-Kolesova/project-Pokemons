import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  background: linear-gradient(270deg, #2E1746 3.2%, #2E225F 99.98%);
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.25), 0 -3px 2px 0 rgba(0, 0, 0, 0.10) inset;
  `

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    //width: min-content;
    color: #FBFBFB;
    font-size: 12.84px;
    line-height: 1;

    @media only screen and (min-width: 768px) {
      //width: auto;
    }
  }
`


export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.60);
  text-align: right;
  font-size: 16px;
`

export const StyledLink = styled(NavLink)`

  color: rgba(255, 255, 255, 0.60);
  font-size: 16px;
  text-decoration: none;
/*  position: relative;
  text-decoration: none;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  color: #008080;

  transition: color 250ms ease-in-out;*/

  /*&::after{
    content: '';
    height: 3px;
    width: 0;
    position: absolute;
    left: 0;
    bottom: 5px;
    background-color: #008080;
    border-radius: 2px;

    transition:
      background-color 250ms ease-in-out,
      width 250ms ease-in-out;
  }

  &:hover::after{
    width: 100%;
    background-color: #005454;
  }*/

/*  &:hover {
    color: #005454;
  }*/
`
