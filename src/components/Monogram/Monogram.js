import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <div>
      <svg
        aria-hidden
        className={classes(styles.monogram, className)}
        width="48"
        height="29"
        viewBox="0 0 48 29"
        ref={ref}
        {...props}
      >
        <defs>
          <clipPath id={clipId}>
            <path d="M2 .4C1.2.4.7.8.6 1.4v26c.2.9 1 1.2 2.5 1.2 1-.1 1.6-.4 1.8-1.1l.1-.2V1.4C4.7 1 4.2.5 3.5.4 3.3.3 2.4.3 2 .4m16.3 0c-1 .1-1.5.5-1.6 1.2v25.8c.3.8 1 1.2 2.2 1.2 1.3 0 2-.4 2.3-1.3V1.5C21 1 20.6.5 19.7.4h-1.4m14.3 0c-1 .1-2.2.5-3.4 1.2-1.3.7-2 1.9-2.4 3.4v18.5c.2 2 1.3 3.3 3.4 4.3l2.1.6H42a8 8 0 0 0 3.1-1.2c1.3-.9 2-1.9 2.2-3.4V20c-.1-.8-1-1.2-2.3-1.2-1.2 0-1.8.4-2 1.1l-.1 1.5c0 1.7 0 1.7-.3 2.3-.4.7-1 1-2 1.2h-7c-1.4-.1-2.1-.9-2.3-2.2V6.1c.2-1.2.9-2 2-2H41c.9 0 1.4.5 1.8 1.3.2.4.2.5.2 2v1.7c.3.7 1 1 2.2 1 1.3 0 2-.3 2.2-1.1V5.1c-.2-1.6-1-2.8-2.3-3.5-1-.6-2.1-1-3-1-.3-.1-8.7-.2-9.4-.1M10.6 11c-2.6.1-3.8 3-2.2 4.7a3.3 3.3 0 0 0 5-.1c.8-1 .8-2.5 0-3.5a3.3 3.3 0 0 0-2.9-1.1" />
          </clipPath>
        </defs>
        <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
        {highlight && (
          <g clipPath={`url(#${clipId})`}>
            <rect className={styles.highlight} width="100%" height="100%" />
          </g>
        )}
      </svg>
    </div>
  );
});
