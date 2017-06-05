import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Dropdown, Modal } from 'antd';
import {injectIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styles from './home.less';

function IndexHeader({dispatch,menus,menuid,selectMenuId,user,intl:{formatMessage}}){
  const dropDownClick= ({ key }) => {
    if(`${key}` === 'logout'){
      Modal.confirm({
          title: formatMessage(messages.title),
          content: formatMessage(messages.content),
          onOk: () => {
              dispatch({
                  type: 'home/logout'
              });
          }
      });
    }
  };
  const menuClick = ({ key }) => {
    dispatch({
        type: 'home/getChildMenuList',
        payload: {parentId: key}
    });
  }
  const dropdownMenu = (
    <Menu className={styles.dropMenu} onClick={dropDownClick}>
      <Menu.Item key="userinfo"><FormattedMessage {...messages.userinfo}/></Menu.Item>
      <Menu.Item key="changepasswd"><FormattedMessage {...messages.changepasswd}/></Menu.Item>
      <Menu.Item key="logout"><FormattedMessage {...messages.logout}/></Menu.Item>
    </Menu>
  );
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.logo}>STAROTT</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectMenuId]} className={styles.headerMenu}   onClick={menuClick}>
        {menus.map(item => <Menu.Item key={item.id}>{item.name}</Menu.Item>)}
      </Menu>
      <div className={styles.userInfo}>
        <Dropdown overlay={dropdownMenu}><div className={styles.dropLink}><Icon type="user"/> { user.username } <Icon type="down"/></div></Dropdown>
      </div>
    </Layout.Header>
  )
}

IndexHeader.propTypes = {
  dispatch: PropTypes.func,
  menus: PropTypes.array,
  user:PropTypes.object,
  menuKey:PropTypes.string
};

export default injectIntl(IndexHeader);
