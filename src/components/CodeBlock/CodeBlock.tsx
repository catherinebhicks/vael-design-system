import * as React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { CopyButton } from '../CopyButton';

export interface CodeBlockProps {
  /** The code to display. */
  code: string;
  /** Language label shown in the header (e.g. "tsx"). */
  language?: string;
  /** Show line numbers. */
  lineNumbers?: boolean;
  /** Show the copy button. */
  copy?: boolean;
  /** Highlight these 1-based line numbers. */
  highlightLines?: number[];
  sx?: SxProps<Theme>;
}

/**
 * CodeBlock — a mono code panel with an optional language label, line numbers,
 * and a copy button. Dependency-free (no syntax highlighter); pass pre-highlighted
 * nodes as `code` if you want tokens colored. Uses the Blueprint code surface.
 */
export function CodeBlock({ code, language, lineNumbers = false, copy = true, highlightLines = [], sx }: CodeBlockProps) {
  const lines = code.replace(/\n$/, '').split('\n');
  const hl = new Set(highlightLines);

  return (
    <Box
      sx={[
        {
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          border: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: 'background.subtle',
          fontFamily: (t) => t.typography.overline?.fontFamily,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {(language || copy) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 1.5,
            py: 0.75,
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Box
            sx={{
              fontFamily: (t) => t.typography.overline?.fontFamily,
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'text.secondary',
            }}
          >
            {language}
          </Box>
          {copy && <CopyButton value={code} size="small" variant="text" label="Copy" />}
        </Box>
      )}
      <Box component="pre" sx={{ m: 0, p: 1.5, overflowX: 'auto', fontSize: '0.8125rem', lineHeight: 1.6 }}>
        <Box component="code" sx={{ fontFamily: 'inherit', color: 'text.primary' }}>
          {lines.map((line, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                px: 1.5,
                mx: -1.5,
                backgroundColor: hl.has(i + 1) ? 'action.selected' : 'transparent',
              }}
            >
              {lineNumbers && (
                <Box
                  aria-hidden
                  sx={{ width: 28, flexShrink: 0, color: 'text.disabled', userSelect: 'none', textAlign: 'right', pr: 1.5 }}
                >
                  {i + 1}
                </Box>
              )}
              <Box component="span" sx={{ whiteSpace: 'pre' }}>
                {line || ' '}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default CodeBlock;
