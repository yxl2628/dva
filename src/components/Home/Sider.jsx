import React from 'react';
import {Link} from 'dva/router';
import { Menu, Icon } from 'antd';
import styles from './home.less';

function IndexSider({ dispatch, childMenus, childMenuId, selectChildMenuId }){
  const { SubMenu, Item } = Menu;
  const menuClick = ({ key }) => {
    dispatch({
        type: 'home/changeMenu',
        payload: {menuId: key}
    });
  }
  const openChange = (openKeys) => {
    dispatch({
        type: 'home/openMenu',
        payload: {childMenuId: openKeys[openKeys.length-1]}
    });
  }

  return (
    <Menu mode="inline" openKeys={[childMenuId]} selectedKeys={[selectChildMenuId]} className={styles.subMenu} onClick={menuClick} onOpenChange={openChange}>
      {
        childMenus.map(({id,name,child}) => (
          <SubMenu key={id} title={<span >{name}</span>}>
            {
              child.map(({id,name,key}) => (
                <Item key={id}><Link to={key}>{name}</Link></Item>
              ))
            }
          </SubMenu>
        ))
      }
    </Menu>
  )
}

IndexSider.propTypes = {
};

export default IndexSider;
