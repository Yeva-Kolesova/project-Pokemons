import styled from 'styled-components';

export const HomeTab = styled.div`
  @media only screen and (min-width: 768px) {
    width: 704px;
    height: 312px;
  }

  @media only screen and (min-width: 1280px) {
    width: 715px;
    height: 308px;
  }
`;

export const HomeHeader = styled.div`
  height: 56px;
  padding-left: 20px;

  display: flex;
  align-items: center;

  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;

export const TitleData = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    margin-right: 59px;
  }

  @media only screen and (min-width: 1280px) {
    margin-right: 64px;
  }
`;

export const TitleType = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    margin-right: 48px;
  }

  @media only screen and (min-width: 1280px) {
    margin-right: 51px;
  }
`;

export const TitleCategory = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    margin-right: 62px;
  }

  @media only screen and (min-width: 1280px) {
    margin-right: 69px;
  }
`;

export const TitleComment = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    margin-right: 97px;
  }

  @media only screen and (min-width: 1280px) {
    margin-right: 104px;
  }
`;

export const TitleSum = styled.p`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ListTransaction = styled.ul`
  @media only screen and (min-width: 1280px) {
    padding-left: 15px;
  }
`;
