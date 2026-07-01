import { Card as MuiCard } from '@mui/material';
import type { CardProps } from '@mui/material';
export type { CardProps };

export function Card(props: CardProps) {
  return <MuiCard {...props} />;
}

export default Card;
