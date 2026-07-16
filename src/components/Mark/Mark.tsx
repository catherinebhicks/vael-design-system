import { styled, alpha } from '@mui/material/styles';

/**
 * Mark — inline highlight for a run of text (semantic <mark>). Uses the warm
 * "signal" accent at low alpha so it reads as emphasis, not selection.
 */
export const Mark = styled('mark')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.warning.main, 0.22),
  color: 'inherit',
  padding: '0 0.15em',
  borderRadius: 2,
}));

export default Mark;
