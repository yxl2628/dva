import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.less';

/**
* 导航
*/
function NavBar({title}){
  return (
    <h1 className={styles.title}>{title}</h1>
  );
}

NavBar.propTypes = {
  title:PropTypes.string
};

export default NavBar;
