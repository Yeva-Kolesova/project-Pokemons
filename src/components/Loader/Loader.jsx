import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

function Loader({ visible }) {
  return (
    <LoaderWrapper>
      <RotatingLines
        visible={visible}
        strokeColor='#ffc727'
        strokeWidth='4'
        animationDuration='0.75'
        ariaLabel='loading'
        height='70'
        width='70'
      />
    </LoaderWrapper>

  );
}

export default Loader;
