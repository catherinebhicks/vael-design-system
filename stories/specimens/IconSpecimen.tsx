import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as faStarRegular,
  faBell as faBellRegular,
  faHeart as faHeartRegular,
  faUser as faUserRegular,
  faCircleCheck as faCircleCheckRegular,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStar,
  faBell,
  faHeart,
  faUser,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { SpecFrame } from './SpecFrame';

const PAIRS = [
  { label: 'star', regular: faStarRegular, solid: faStar },
  { label: 'bell', regular: faBellRegular, solid: faBell },
  { label: 'heart', regular: faHeartRegular, solid: faHeart },
  { label: 'user', regular: faUserRegular, solid: faUser },
  { label: 'circle-check', regular: faCircleCheckRegular, solid: faCircleCheck },
];

const SIZES = [
  { token: 'small', px: 20 },
  { token: 'medium', px: 24 },
  { token: 'large', px: 35 },
];

/** Icon specimen — shipped weights (Regular + Solid) and the size tokens. */
export function IconSpecimen() {
  return (
    <SpecFrame>
      <Typography variant="subtitle2" gutterBottom>
        Weights — Regular (default) vs Solid (active / emphasis)
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', mb: 1 }}>
        {PAIRS.map(({ label, regular, solid }) => (
          <Box key={label} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2, color: 'text.primary' }}>
              <FontAwesomeIcon icon={regular} style={{ fontSize: 24 }} />
              <FontAwesomeIcon icon={solid} style={{ fontSize: 24 }} />
            </Box>
            <Typography variant="caption" color="text.secondary">
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 2.5 }} />

      <Typography variant="subtitle2" gutterBottom>
        Size tokens
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        {SIZES.map(({ token, px }) => (
          <Box key={token} sx={{ textAlign: 'center', color: 'text.primary' }}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: px }} />
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              {token} · {px}px
            </Typography>
          </Box>
        ))}
      </Box>
    </SpecFrame>
  );
}

export default IconSpecimen;
