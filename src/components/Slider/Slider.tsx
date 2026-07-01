import { Slider as MuiSlider } from '@mui/material';
import type { SliderProps } from '@mui/material';
export type { SliderProps };

export function Slider(props: SliderProps) {
  return <MuiSlider {...props} />;
}

export default Slider;
