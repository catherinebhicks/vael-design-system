import * as React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NotificationItem {
  id: string | number;
  title: React.ReactNode;
  /** Optional supporting line. */
  body?: React.ReactNode;
  /** Relative or absolute timestamp label. */
  time?: React.ReactNode;
  /** Leading icon (defaults to a bell). */
  icon?: IconDefinition;
  /** Unread rows get an accent dot + subtle tint. */
  unread?: boolean;
}

export interface NotificationCenterProps {
  items: NotificationItem[];
  title?: React.ReactNode;
  onMarkAllRead?: () => void;
  onItemClick?: (item: NotificationItem) => void;
  emptyLabel?: React.ReactNode;
  width?: number;
  sx?: SxProps<Theme>;
}

/**
 * NotificationCenter — a bounded panel listing notifications (icon, title,
 * body, time), with unread accents and a "mark all read" header action.
 * Drop it inside a Popover/Drawer or render inline. Mono header + titles.
 */
export function NotificationCenter({
  items,
  title = 'Notifications',
  onMarkAllRead,
  onItemClick,
  emptyLabel = 'You’re all caught up',
  width = 360,
  sx,
}: NotificationCenterProps) {
  const unreadCount = items.filter((i) => i.unread).length;
  return (
    <Box
      sx={[
        {
          width,
          borderRadius: 1.5,
          border: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: 'background.paper',
          overflow: 'hidden',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.25,
          bgcolor: 'background.default',
        }}
      >
        <Typography
          sx={{
            fontFamily: (t) => t.typography.overline?.fontFamily,
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          {title}
          {unreadCount > 0 ? ` · ${unreadCount}` : ''}
        </Typography>
        {onMarkAllRead && unreadCount > 0 && (
          <Button size="small" onClick={onMarkAllRead} sx={{ minWidth: 0, px: 1, color: 'primary.dark' }}>
            Mark all read
          </Button>
        )}
      </Box>
      <Divider />
      {items.length === 0 ? (
        <Box sx={{ px: 2, py: 4, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="body2">{emptyLabel}</Typography>
        </Box>
      ) : (
        items.map((it, i) => (
          <React.Fragment key={it.id}>
            {i > 0 && <Divider />}
            <Box
              onClick={() => onItemClick?.(it)}
              sx={{
                display: 'flex',
                gap: 1.25,
                px: 2,
                py: 1.5,
                cursor: onItemClick ? 'pointer' : 'default',
                bgcolor: (t) => (it.unread ? `${t.palette.primary.main}0a` : 'transparent'),
                '&:hover': onItemClick ? { bgcolor: 'action.hover' } : undefined,
              }}
            >
              <Box sx={{ color: 'text.secondary', mt: '2px' }}>
                <FontAwesomeIcon icon={it.icon ?? faBell} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: (t) => t.typography.body2.fontFamily,
                    fontWeight: it.unread ? 600 : 500,
                    fontSize: '0.8125rem',
                    color: 'text.primary',
                  }}
                >
                  {it.title}
                </Typography>
                {it.body && (
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    {it.body}
                  </Typography>
                )}
                {it.time && (
                  <Typography variant="caption" color="text.disabled">
                    {it.time}
                  </Typography>
                )}
              </Box>
              {it.unread && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    mt: '5px',
                    flexShrink: 0,
                  }}
                />
              )}
            </Box>
          </React.Fragment>
        ))
      )}
    </Box>
  );
}

export default NotificationCenter;
