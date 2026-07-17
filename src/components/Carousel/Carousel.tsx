import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export interface CarouselProps {
  /** Slides — one node per slide. */
  children: React.ReactNode;
  /** Starting slide index. */
  defaultIndex?: number;
  /** Show prev/next arrows. */
  arrows?: boolean;
  /** Show dot indicators. */
  dots?: boolean;
  /** Loop past the ends. */
  loop?: boolean;
  /** Fires when the active slide changes. */
  onChange?: (index: number) => void;
  sx?: SxProps<Theme>;
}

/**
 * Carousel / SlideDeck — a single-view slide switcher with arrows and dot
 * indicators. Each child is a slide; state is controlled internally. For
 * galleries, testimonials, and step-through decks.
 */
export function Carousel({
  children,
  defaultIndex = 0,
  arrows = true,
  dots = true,
  loop = true,
  onChange,
  sx,
}: CarouselProps) {
  const slides = React.Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = React.useState(Math.min(defaultIndex, Math.max(0, count - 1)));

  const go = (next: number) => {
    let n = next;
    if (n < 0) n = loop ? count - 1 : 0;
    if (n > count - 1) n = loop ? 0 : count - 1;
    setIndex(n);
    onChange?.(n);
  };

  return (
    <Box sx={[{ display: 'flex', flexDirection: 'column', gap: 1.5 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {arrows && count > 1 && (
          <IconButton
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            disabled={!loop && index === 0}
            sx={{ position: 'absolute', left: 8, zIndex: 1, bgcolor: 'background.paper', boxShadow: 1, '&:hover': { bgcolor: 'background.paper' } }}
            size="small"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
        )}
        <Box sx={{ flex: 1, minWidth: 0 }}>{slides[index]}</Box>
        {arrows && count > 1 && (
          <IconButton
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            disabled={!loop && index === count - 1}
            sx={{ position: 'absolute', right: 8, zIndex: 1, bgcolor: 'background.paper', boxShadow: 1, '&:hover': { bgcolor: 'background.paper' } }}
            size="small"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </IconButton>
        )}
      </Box>
      {dots && count > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.75 }}>
          {slides.map((_, i) => (
            <Box
              key={i}
              component="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              sx={{
                width: i === index ? 18 : 7,
                height: 7,
                p: 0,
                border: 0,
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'width .2s, background-color .2s',
                backgroundColor: (t) => (i === index ? t.palette.primary.main : t.palette.action.disabled),
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Carousel;
