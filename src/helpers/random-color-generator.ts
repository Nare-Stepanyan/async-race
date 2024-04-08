import { MAX_COLOR_COMPONENT } from '../constants/index.ts';

export default function colorGenerator(): string {
  const red = Math.floor(Math.random() * MAX_COLOR_COMPONENT);
  const green = Math.floor(Math.random() * MAX_COLOR_COMPONENT);
  const blue = Math.floor(Math.random() * MAX_COLOR_COMPONENT);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
