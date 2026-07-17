import * as React from 'react';
import { Box, Avatar, Typography, Chip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface PersonaCardProps {
  name: React.ReactNode;
  role?: React.ReactNode;
  /** Avatar image URL; falls back to initials. */
  avatar?: string;
  /** Short descriptor line ("42 · Product Manager · Austin"). */
  attributes?: React.ReactNode;
  /** Goals / needs, rendered as a labeled list. */
  goals?: string[];
  /** Pain points / frustrations. */
  frustrations?: string[];
  /** Trait tags. */
  tags?: string[];
  sx?: SxProps<Theme>;
}

function initials(name: React.ReactNode): string {
  if (typeof name !== 'string') return '';
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function Section({ label, items }: { label: string; items: string[] }) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: (t) => t.typography.overline?.fontFamily,
          fontSize: '0.625rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'text.secondary',
          mb: 0.5,
        }}
      >
        {label}
      </Typography>
      <Box component="ul" sx={{ m: 0, pl: 2 }}>
        {items.map((g, i) => (
          <Typography key={i} component="li" variant="body2" color="text.primary" sx={{ mb: 0.25 }}>
            {g}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

/**
 * PersonaCard — a UX persona summary: avatar, name/role, attributes, and
 * goals / frustrations / trait tags. For research decks and case studies.
 */
export function PersonaCard({ name, role, avatar, attributes, goals, frustrations, tags, sx }: PersonaCardProps) {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 2.5,
          borderRadius: 2,
          border: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: 'background.paper',
          maxWidth: 340,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
        <Avatar src={avatar} sx={{ width: 52, height: 52 }}>
          {initials(name)}
        </Avatar>
        <Box>
          <Typography sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '1.0625rem' }}>
            {name}
          </Typography>
          {role && (
            <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>
              {role}
            </Typography>
          )}
        </Box>
      </Box>
      {attributes && (
        <Typography variant="body2" color="text.secondary">
          {attributes}
        </Typography>
      )}
      {goals && goals.length > 0 && <Section label="Goals" items={goals} />}
      {frustrations && frustrations.length > 0 && <Section label="Frustrations" items={frustrations} />}
      {tags && tags.length > 0 && (
        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
          {tags.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default PersonaCard;
