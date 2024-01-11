import React from 'react';
import { BalanceValue, StyledBalanceContainer, StyledH } from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../reduxConfig/auth/selectors';

function Balance() {
  const balance = useSelector(selectBalance)
  return (
    <StyledBalanceContainer>
      <StyledH>Your balance</StyledH>
      <BalanceValue><span>₴ </span>{Number(balance).toFixed(2)}</BalanceValue>
    </StyledBalanceContainer>
  );
}

export default Balance;
