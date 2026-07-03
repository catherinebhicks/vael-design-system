import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { blueprint } from '../../../vael/blueprint';

export interface BrowserFrameProps {
  /** Address-bar text, e.g. "hyundaiusa.com / mpg-information". */
  url?: string;
  /** Show the three traffic-light dots. @default true */
  dots?: boolean;
  /** Corner radius (px). @default 18 */
  radius?: number;
  /** Body padding. @default '26px 30px 30px' */
  bodyPadding?: string | number;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

/**
 * A browser/window chrome frame (traffic-light dots + address bar) wrapping a
 * mock, as used on the deck openers. Dark-mode aware.
 */
export function BrowserFrame({ url, dots = true, radius = 18, bodyPadding = '26px 30px 30px', children, sx }: BrowserFrameProps) {
  const { palette } = useTheme();
  const dark = palette.mode === 'dark';
  const t = blueprint[dark ? 'dark' : 'light'];
  const Dot = ({ c }: { c: string }) => (
    <Box component="span" sx={{ width: 11, height: 11, borderRadius: '50%', background: c, flex: 'none' }} />
  );
  return (
    <Box sx={[
      {
        background: t.panel, border: `1px solid ${t.line2}`, borderRadius: `${radius}px`,
        boxShadow: dark ? t.shadow : '0 24px 60px -30px rgba(20,28,40,0.45)',
        overflow: 'hidden',
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}>
      <Box sx={{
        display: 'flex', alignItems: 'center', gap: '8px', p: '16px 20px',
        borderBottom: `1px solid ${t.line}`, fontFamily: blueprint.font.mono, fontSize: 17, color: t.faint,
      }}>
        {dots && (<><Dot c="#e1552f66" /><Dot c="#e0a62f66" /><Dot c="#2e7d3266" /></>)}
        {url && <Box component="span" sx={{ ml: dots ? '10px' : 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{url}</Box>}
      </Box>
      <Box sx={{ p: bodyPadding }}>{children}</Box>
    </Box>
  );
}

export default BrowserFrame;
