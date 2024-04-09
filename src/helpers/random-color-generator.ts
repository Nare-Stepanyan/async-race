import {
  HEX_COLOR_LENGTH,
  INCREMENT,
  MAX_COLOR_COMPONENT,
  ZERO,
} from '../constants/index.ts';

export default function colorGenerator(): string {
  const hexChars = '0123456789ABCDEF';
  let hexColor = '#';

  for (let i = ZERO; i < HEX_COLOR_LENGTH; i += INCREMENT) {
    hexColor += hexChars[Math.floor(Math.random() * MAX_COLOR_COMPONENT)];
  }
  return hexColor;
}
