import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import styles from './searchbar.less';

/**
* 搜索框
*/
const Search = Input.Search;
function SearchBar({title, tip, search }){
  return (
    <div className={styles.search}>
      <h5 className={styles.title}>{title}</h5>
      <Search placeholder={tip} onSearch={search}/>
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string,
  tip: PropTypes.string,
  search: PropTypes.func
};

export default SearchBar;
