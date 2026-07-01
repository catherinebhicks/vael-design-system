import React from 'react';
import { Box } from '@mui/material';

// A chart legend: colored indicator + label per series. When `onToggle` is
// provided, items become buttons (e.g. to show/hide a series); inactive items
// dim. Pairs with ChartCard and the chart components.

export interface LegendItem {
  label: string;
  color: string;
  active?: boolean;
}

export interface LegendProps {
  items: LegendItem[];
  orientation?: 'horizontal' | 'vertical';
  onToggle?: (index: number, item: LegendItem) => void;
  className?: string;
}

export function Legend({ items, orientation = 'horizontal', onToggle, className }: LegendProps) {
  const interactive = Boolean(onToggle);

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        flexWrap: 'wrap',
        gap: orientation === 'vertical' ? 0.75 : 2,
      }}
    >
      {items.map((item, i) => {
        const inactive = item.active === false;
        return (
          <Box
            key={item.label + i}
            component={interactive ? 'button' : 'span'}
            type={interactive ? 'button' : undefined}
            onClick={interactive ? () => onToggle!(i, item) : undefined}
            aria-pressed={interactive ? !inactive : undefined}
            sx={(theme) => ({
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              font: 'inherit',
              fontSize: '0.8125rem',
              color: theme.palette.text.secondary,
              opacity: inactive ? 0.45 : 1,
              background: 'none',
              border: 'none',
              padding: interactive ? '2px 4px' : 0,
              borderRadius: 6,
              cursor: interactive ? 'pointer' : 'default',
              transition: 'opacity .15s',
              '&:hover': interactive ? { color: theme.palette.text.primary } : undefined,
              '&:focus-visible': interactive
                ? { outline: `2px solid ${theme.palette.primary.main}`, outlineOffset: 2 }
                : undefined,
            })}
          >
            <Box
              component="span"
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: item.color,
                flexShrink: 0,
                ...(inactive && { boxShadow: 'inset 0 0 0 1px currentColor', backgroundColor: 'transparent' }),
              }}
            />
            {item.label}
          </Box>
        );
      })}
    </Box>
  );
}

export default Legend;
