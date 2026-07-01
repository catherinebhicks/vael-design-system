import { Accordion as MuiAccordion } from '@mui/material';
import type { AccordionProps } from '@mui/material';
export type { AccordionProps };

export function Accordion(props: AccordionProps) {
  return <MuiAccordion {...props} />;
}

export default Accordion;
