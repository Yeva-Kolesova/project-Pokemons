import React from 'react';
import { InputToggle, LabelToggle, SpanToggle } from './ToggleSwitch.styled';

export const ToggleSwitch = () => {
  return (
    <LabelToggle>
      <InputToggle type="checkbox" />
      <SpanToggle />
    </LabelToggle>
  );
};
