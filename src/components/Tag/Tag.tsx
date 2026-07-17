import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export type TagColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

const paletteFor = (theme: import('@mui/material/styles').Theme, color: TagColor) => {
  if (color === 'default') return theme.palette.text.primary;
  return theme.palette[color].main;
};

const Root = styled('span', {
  shouldForwardProp: (p) => p !== 'tagColor' && p !== 'clickable',
})<{ tagColor: TagColor; clickable?: boolean }>(({ theme, tagColor, clickable }) => {
  const c = paletteFor(theme, tagColor);
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 22,
    padding: '0 8px',
    borderRadius: 4, // square-ish — deliberately NOT a Chip pill
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.6875rem',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0.02em',
    color: tagColor === 'default' ? theme.palette.text.secondary : c,
    backgroundColor: alpha(c, tagColor === 'default' ? 0.06 : 0.1),
    border: `1px solid ${alpha(c, 0.28)}`,
    cursor: clickable ? 'pointer' : 'default',
  };
});

const Dot = styled('span')<{ tagColor: TagColor }>(({ theme, tagColor }) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: paletteFor(theme, tagColor),
}));

const Remove = styled('button')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  border: 0,
  background: 'transparent',
  padding: 0,
  marginRight: -2,
  cursor: 'pointer',
  color: 'inherit',
  opacity: 0.6,
  '&:hover': { opacity: 1 },
}));

export interface TagProps {
  children: React.ReactNode;
  /** Semantic color; drives text, border, and fill tint. */
  color?: TagColor;
  /** Show a leading status dot. */
  dot?: boolean;
  /** Show a remove (×) affordance and fire this on click. */
  onRemove?: () => void;
  onClick?: () => void;
}

/**
 * Tag — a compact, square-cornered label. Distinct from Chip: Tag is a
 * lightweight metadata marker (statuses, categories, keywords), not an
 * interactive input token. Use Chip for selectable/deletable input entries.
 */
export function Tag({ children, color = 'default', dot = false, onRemove, onClick }: TagProps) {
  return (
    <Root tagColor={color} clickable={Boolean(onClick)} onClick={onClick}>
      {dot && <Dot tagColor={color} />}
      {children}
      {onRemove && (
        <Remove
          type="button"
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: '0.75em' }} />
        </Remove>
      )}
    </Root>
  );
}

export default Tag;
