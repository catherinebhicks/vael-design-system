import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface GaugeStatProps {
  /** Current value. */
  value: number;
  /** Maximum value (default 100). */
  max?: number;
  /** Diameter in px. */
  size?: number;
  /** Ring thickness in px. */
  thickness?: number;
  /** Arc color (defaults to primary.main). */
  color?: string;
  /** Center label under the value. */
  label?: React.ReactNode;
  /** Override the big center text (defaults to a percentage). */
  valueText?: React.ReactNode;
  /** Sweep angle: 'full' (360°) or 'semi' (180°, bottom-open). */
  variant?: 'full' | 'semi';
  /** Set when placed on a dark / inverted band so the value + label + track read as light-on-dark. */
  onDark?: boolean;
}

/**
 * GaugeStat — a compact radial stat ring (dependency-free SVG): an arc filled
 * to `value`/`max` with a value in the center. The micro-viz counterpart to
 * the Advanced Highcharts solid-gauge; use this inside cards and tiles.
 */
export function GaugeStat({
  value,
  max = 100,
  size = 96,
  thickness = 8,
  color,
  label,
  valueText,
  variant = 'full',
  onDark = false,
}: GaugeStatProps) {
  const theme = useTheme();
  const arc = color ?? theme.palette.primary.main;
  const track = onDark ? 'rgba(255,255,255,0.12)' : theme.palette.action.disabledBackground;
  const pct = Math.max(0, Math.min(1, value / max));

  const r = (size - thickness) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circ = 2 * Math.PI * r;
  const sweep = variant === 'semi' ? 0.5 : 1;
  const dash = circ * sweep;
  const height = variant === 'semi' ? size / 2 + thickness : size;
  // full: start at top (rotate -90). semi: start at left (rotate 180).
  const rotate = variant === 'semi' ? 180 : -90;

  return (
    <Box sx={{ position: 'relative', width: size, height, display: 'inline-block' }}>
      <svg width={size} height={height} viewBox={`0 0 ${size} ${height}`}>
        <g transform={`rotate(${rotate} ${cx} ${cy})`}>
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={track}
            strokeWidth={thickness}
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
          />
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={arc}
            strokeWidth={thickness}
            strokeDasharray={`${dash * pct} ${circ}`}
            strokeLinecap="round"
          />
        </g>
      </svg>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          // full: fill the box and center. semi: anchor to the bottom (top auto)
          // so the value/label nestle in the arc's bowl instead of over the curve.
          // (Using `inset:0` here forced top:0 and broke the semi placement.)
          top: variant === 'semi' ? undefined : 0,
          bottom: variant === 'semi' ? thickness : 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.25,
        }}
      >
        <Typography
          sx={{
            fontFamily: (t) => t.typography.h5.fontFamily,
            fontWeight: 600,
            fontSize: size / 4.5,
            lineHeight: 1,
            color: onDark ? 'common.white' : 'text.primary',
          }}
        >
          {valueText ?? `${Math.round(pct * 100)}%`}
        </Typography>
        {label && (
          <Typography
            sx={{
              fontFamily: (t) => t.typography.overline?.fontFamily,
              fontSize: '0.625rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: onDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
            }}
          >
            {label}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default GaugeStat;
