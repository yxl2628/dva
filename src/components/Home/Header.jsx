import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import styles from './home.less';

function IndexHeader({dispatch}){
  const dropDownClick= function ({ key }) {
    if(`${key}`==3){
      dispatch({
        type: "login/logout",
        payload: {logout: true}
      });
    }
  };
  const dropdownMenu = (
    <Menu className={styles.dropMenu} onClick={dropDownClick}>
      <Menu.Item key="1">用户信息</Menu.Item>
      <Menu.Item key="2">修改密码</Menu.Item>
      <Menu.Item key="3">注销</Menu.Item>
    </Menu>
  );
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.logo}>STAROTT</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className={styles.headerMenu}>
        <Menu.Item key="1">视频管理</Menu.Item>
        <Menu.Item key="2">应用管理</Menu.Item>
        <Menu.Item key="3">信息管理</Menu.Item>
        <Menu.Item key="4">业务管理</Menu.Item>
        <Menu.Item key="5">门户管理</Menu.Item>
        <Menu.Item key="6">用户管理</Menu.Item>
        <Menu.Item key="7">分发管理</Menu.Item>
        <Menu.Item key="8">汇聚管理</Menu.Item>
        <Menu.Item key="9">系统管理</Menu.Item>
      </Menu>
      <div className={styles.userInfo}>
        <Dropdown overlay={dropdownMenu}><div className={styles.dropLink}><Icon type="user"/> admin <Icon type="down"/></div></Dropdown>
      </div>
    </Layout.Header>
  )
}

IndexHeader.propTypes = {};

export default IndexHeader;
