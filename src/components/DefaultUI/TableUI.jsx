import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'antd';
import {injectIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styles from './table.less';

/**
* 表格
*/
function TableUI({rowSelection, columns, data, intl:{formatMessage} }){
  const pagination = {
    total:data.length,
    pageSize:10,
    showTotal:(total, range) => `${range[0]} - ${range[1]} ` +  formatMessage(messages.table.total) + ` ${total} ` + formatMessage(messages.table.result),
    size:'default'
  }
  return (
    <div className={styles.table}>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} size="middle" bordered/>
    </div>
  );
}

TableUI.propTypes = {
  rowSelection: PropTypes.object,
  columns: PropTypes.array,
  data: PropTypes.array
};

export default injectIntl(TableUI);
