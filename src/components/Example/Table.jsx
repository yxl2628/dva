import React from 'react';
import {Table, Button, Popover, Input, Select, Pagination  } from 'antd';
import styles from './Table.less';
import imgTemp from '../../assets/yay.jpg';

function Example(){
  const columns = [
    {
      title: '封面',
      dataIndex: 'img',
      key: 'img',
      render:(val) => {
        const content = (
          <img src={val} width="300px" />
        );
        return (
          <Popover content={content} title="封面预览">
            <img src={val} width='40px' height="40px" />
          </Popover>
        )
      }
    },
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: '类型',
      dataIndex: 'type',
      key: 'type'
    }, {
      title: '版权时间',
      dataIndex: 'time',
      key: 'time'
    }, {
      title: '上传时间',
      dataIndex: 'createDate',
      key: 'createDate'
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      sorter: true
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width:200,
      render:() => (
        <span className={styles.button}>
          <Button size="default" >修改</Button>
          <Button size="default" >删除</Button>
        </span>
      )
    }
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: `key ${i}`,
      id: i,
      img:imgTemp,
      title: `上传文件的标题 ${i}`,
      time:'2017年1月-2019年12月',
      type: i % 2 == 0
        ? '已上传'
        : '未上传',
      createDate: '2017年3月27日',
      status: i % 2 != 0
        ? '已转码'
        : '未转码'
    });
  }
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
  const header = () => (
    <div>
      <Select style={{ width: 150,paddingRight:'10px' }} onChange={value => console.log(value)} placeholder="请选择视频状态">
        <Select.Option value="1">已上传</Select.Option>
        <Select.Option value="0">未上传</Select.Option>
      </Select>
      <Input.Search placeholder="请输入检索内容" style={{ width: 200 }} onSearch={value => console.log(value)} />
    </div>
  )
  const pagination = {
    total:data.length,
    pageSize:9,
    showTotal:(total, range) => `${range[0]} - ${range[1]} 共 ${total} 条数据`,
    size:'default'
  }
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <span className={styles.title}>表格示例</span>
      </div>
      <div className={styles.headerButton}>
          <Button type="primary">添加视频</Button>
          <Button type="primary">扫描文件夹</Button>
      </div>
      <div className={styles.table}>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} title={header} pagination={pagination} size="middle" bordered/>
      </div>
    </div>
  )
}
Example.propTypes = {};
export default Example;
