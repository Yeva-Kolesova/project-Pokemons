import { AdaptiveContainer } from './Container.styled';

function Container({ children }) {
  return (
    <AdaptiveContainer>
      {children}
    </AdaptiveContainer>
  );
}

export default Container
