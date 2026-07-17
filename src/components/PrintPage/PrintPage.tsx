import * as React from 'react';
import { Box, GlobalStyles } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export type PageSize = 'A4' | 'Letter' | 'Legal' | 'Tabloid';

const PAGE_DIMS: Record<PageSize, { w: string; h: string }> = {
  A4: { w: '210mm', h: '297mm' },
  Letter: { w: '8.5in', h: '11in' },
  Legal: { w: '8.5in', h: '14in' },
  Tabloid: { w: '11in', h: '17in' },
};

export interface PrintPageProps {
  children: React.ReactNode;
  size?: PageSize;
  orientation?: 'portrait' | 'landscape';
  /** Page margin (CSS length). */
  margin?: string;
  /** Show a page-like frame on screen (off = flow normally on screen). */
  previewOnScreen?: boolean;
  sx?: SxProps<Theme>;
}

/** Force a page break before its children when printing. */
export function PageBreak() {
  return <Box sx={{ breakBefore: 'page', pageBreakBefore: 'always' }} aria-hidden />;
}

/** Keep its children together on one page (no break inside) when printing. */
export function KeepTogether({ children }: { children: React.ReactNode }) {
  return <Box sx={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>{children}</Box>;
}

/**
 * PrintPage / PagedDocument — a print-first page container. Sets the `@page`
 * size + margins, renders a page-like frame on screen (optional), and ships
 * `PageBreak` / `KeepTogether` helpers for pagination. For invoices, reports,
 * and case-study PDFs exported from the browser.
 */
export function PrintPage({
  children,
  size = 'Letter',
  orientation = 'portrait',
  margin = '0.75in',
  previewOnScreen = true,
  sx,
}: PrintPageProps) {
  const dims = PAGE_DIMS[size];
  const width = orientation === 'portrait' ? dims.w : dims.h;

  return (
    <>
      <GlobalStyles
        styles={{
          '@page': { size: `${size} ${orientation}`, margin },
          '@media print': {
            '.vael-print-only': { display: 'block' },
            '.vael-screen-only': { display: 'none' },
          },
          '@media screen': { '.vael-print-only': { display: 'none' } },
        }}
      />
      <Box
        className="vael-print-page"
        sx={[
          {
            boxSizing: 'border-box',
            width,
            mx: 'auto',
            p: margin,
            ...(previewOnScreen
              ? {
                  '@media screen': {
                    my: 3,
                    minHeight: orientation === 'portrait' ? dims.h : dims.w,
                    bgcolor: 'background.paper',
                    boxShadow: (t) => t.shadows[4],
                    border: (t) => `1px solid ${t.palette.divider}`,
                  },
                }
              : {}),
            '@media print': { width: 'auto', boxShadow: 'none', border: 'none', p: 0, m: 0 },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {children}
      </Box>
    </>
  );
}

export default PrintPage;
