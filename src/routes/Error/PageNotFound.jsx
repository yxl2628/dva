import React from 'react';
import styles from './pagenotfound.less';

function PageNotFound(){
  return (
    <div className={styles.bg}>
      <section className={styles.info}>
        <h1>404</h1>
        <p>您要请求的页面不存在</p>
      </section>
    </div>
  );
}

export default PageNotFound;
