import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import { Button } from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';
import NavBar from '../../components/DefaultUI/NavBar';
import SearchBar from '../../components/DefaultUI/SearchBar';
import TableUI from '../../components/DefaultUI/TableUI';
import messages from './messages';

function UserList({ userlist, intl: { formatMessage } }){
  const columns = [
    {
      title: '账号',
      dataIndex: 'username',
      key: 'username'
    }, {
      title: '租户名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '联系电话',
      dataIndex: 'tel',
      key: 'tel'
    }, {
      title: '创建时间',
      dataIndex: 'createDate',
      key: 'createDate'
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width:200,
      render:() => (
        <div className="btn-group">
          <Button size="default" ><FormattedMessage {...messages.button.edit} /></Button>
          <Button size="default" ><FormattedMessage {...messages.button.delete} /></Button>
        </div>
      )
    }
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
  }
  const tableProps = { columns,data:userlist.data, rowSelection };
  const add = () => {
    console.log("添加。。。");
  }
  const search = (value) => {
    console.log('搜索。。。',value);
  }
  return (
    <div>
      <NavBar title={formatMessage(messages.title)} ></NavBar><Button type="primary" onClick={add}><FormattedMessage {...messages.button.add} /></Button>
      <div className="search-bar">
        <SearchBar title={formatMessage(messages.search.title)} tip={formatMessage(messages.search.tip)} search={search}></SearchBar>
      </div>
      <TableUI {...tableProps} ></TableUI>
    </div>
  );
}

UserList.propTypes = {
  title:PropTypes.string
};

function mapStateToProps({userlist}) {
  return {userlist}
}

export default injectIntl(connect(mapStateToProps)(UserList));
