import React from 'react';

import styles from './index.module.css';

export default function CssTest() {
  return (
    <div className={styles.container}>
      <div className={styles.shadow}>文字阴影</div>

      <div>
        <div className={styles.animation}>css动画animation</div>
      </div>

      <div className={styles.trowContainer}>
        抛物线
        <div className={styles.throw}>抛</div>
      </div>

      <div>
        transition
        <div className={styles.transiton}></div>
      </div>

      <div>transform</div>
    </div>
  );
}
