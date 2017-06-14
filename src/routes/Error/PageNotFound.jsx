import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './pagenotfound.less';

function PageNotFound(){
  return (
    <div className={styles.bg}>
      <section className={styles.info}>
        <h1>404</h1>
        <p><FormattedMessage {...messages.PageNotFound}/></p>
      </section>
    </div>
  );
}

export default PageNotFound;
