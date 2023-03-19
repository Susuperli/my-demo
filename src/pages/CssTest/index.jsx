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

      <div className={styles.transform}>
        transform
        <div className={styles.transform_scale}>缩放</div>
        <div className={styles.transform_rotate}>旋转</div>
        {/* <div className={styles.transform_translate}>移动</div> */}
      </div>
    </div>
  );
}
