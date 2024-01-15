import React from 'react';
import { BalanceValue, StyledBalanceContainer, StyledH } from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../reduxConfig/auth/selectors';

function Balance() {
    function formatNumber(number) {
        return number
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$& ');
    }

  const balance = useSelector(selectBalance)
  return (
    <StyledBalanceContainer>
      <StyledH>Your balance</StyledH>
      <BalanceValue><span>₴ </span>{formatNumber(Number(balance))}</BalanceValue>
    </StyledBalanceContainer>
  );
}

export default Balance;
