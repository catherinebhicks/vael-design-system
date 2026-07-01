import React, { useState } from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { theme } from '../../src/theme';
import { SpecFrame } from './SpecFrame';

const DURATIONS: { token: string; ms: number }[] = [
  { token: 'shortest', ms: theme.transitions.duration.shortest },
  { token: 'shorter', ms: theme.transitions.duration.shorter },
  { token: 'short', ms: theme.transitions.duration.short },
  { token: 'standard', ms: theme.transitions.duration.standard },
  { token: 'complex', ms: theme.transitions.duration.complex },
];

const EASINGS: { token: string; curve: string }[] = [
  { token: 'easeInOut', curve: theme.transitions.easing.easeInOut },
  { token: 'easeOut', curve: theme.transitions.easing.easeOut },
  { token: 'easeIn', curve: theme.transitions.easing.easeIn },
  { token: 'sharp', curve: theme.transitions.easing.sharp },
];

function Track({ on, duration, easing }: { on: boolean; duration: number; easing: string }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 24,
        borderRadius: 999,
        bgcolor: 'action.hover',
        flex: 1,
        minWidth: 160,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 2,
          left: 2,
          width: 20,
          height: 20,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          transform: on ? 'translateX(calc(100% + 100px))' : 'translateX(0)',
          transition: `transform ${duration}ms ${easing}`,
        }}
      />
    </Box>
  );
}

/** Interactive motion demo — feel each duration and easing token. */
export function MotionDemo() {
  const [durOn, setDurOn] = useState(false);
  const [activeDur, setActiveDur] = useState(DURATIONS[2]); // short (default)
  const [easeOn, setEaseOn] = useState(false);
  const [activeEase, setActiveEase] = useState(EASINGS[0]);

  return (
    <SpecFrame>
      <Typography variant="subtitle2" gutterBottom>
        Duration — click a token to play the marker at that speed
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" sx={{ mb: 1 }}>
        <Track on={durOn} duration={activeDur.ms} easing={theme.transitions.easing.easeInOut} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {DURATIONS.map((d) => (
            <Button
              key={d.token}
              size="small"
              variant={activeDur.token === d.token ? 'contained' : 'outlined'}
              onClick={() => {
                setActiveDur(d);
                setDurOn((v) => !v);
              }}
            >
              {d.token} · {d.ms}ms
            </Button>
          ))}
        </Box>
      </Stack>

      <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
        Easing — same 600ms travel, different curve
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
        <Track on={easeOn} duration={600} easing={activeEase.curve} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {EASINGS.map((e) => (
            <Button
              key={e.token}
              size="small"
              variant={activeEase.token === e.token ? 'contained' : 'outlined'}
              onClick={() => {
                setActiveEase(e);
                setEaseOn((v) => !v);
              }}
            >
              {e.token}
            </Button>
          ))}
        </Box>
      </Stack>
    </SpecFrame>
  );
}

export default MotionDemo;
