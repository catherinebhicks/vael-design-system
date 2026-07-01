import { Skeleton as MuiSkeleton, Box } from '@mui/material';
import type { SkeletonProps as MuiSkeletonProps, BoxProps } from '@mui/material';

export interface SkeletonProps extends MuiSkeletonProps {}

export function Skeleton({ animation = 'wave', ...props }: SkeletonProps) {
  return <MuiSkeleton animation={animation} {...props} />;
}

export interface SkeletonTextProps {
  /** Number of text lines to render. Defaults to 3. */
  lines?: number;
  /** Animation type applied to each line. Defaults to 'wave'. */
  animation?: MuiSkeletonProps['animation'];
  /** Spacing (theme units) between lines. Defaults to 0.5. */
  spacing?: number;
  /** Optional wrapper props (e.g. sx) forwarded to the container Box. */
  containerProps?: BoxProps;
}

export function SkeletonText({
  lines = 3,
  animation = 'wave',
  spacing = 0.5,
  containerProps,
}: SkeletonTextProps) {
  const count = Math.max(0, Math.floor(lines));
  return (
    <Box {...containerProps}>
      {Array.from({ length: count }, (_, i) => {
        const isLast = i === count - 1 && count > 1;
        return (
          <Skeleton
            key={i}
            variant="text"
            animation={animation}
            sx={{ width: isLast ? '60%' : '100%', mb: i === count - 1 ? 0 : spacing }}
          />
        );
      })}
    </Box>
  );
}

export default Skeleton;
