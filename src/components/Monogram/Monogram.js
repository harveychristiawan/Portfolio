import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();

  return (
    <div className={styles.monogramContainer}>
      <img
        src="/icon.svg"
        className={classes(styles.monogram, className)}
        width="48"
        height="29"
        ref={ref}
        {...props}
      />
      <div className={styles.underline} />
    </div>
  );
});
