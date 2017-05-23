import React from 'react';
import {Link} from 'dva/router';
import { Menu, Icon } from 'antd';
import styles from './home.less';

function IndexSider(){
  const { SubMenu, Item } = Menu;
  return (
    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} className={styles.subMenu}>
      <SubMenu key="sub1" title={<span > <Icon type="file-text" />常用示例</span>}>
        <Item key="1"><Link to='table'>表格示例</Link></Item>
        <Item key="2"><Link to='form'>表单示例</Link></Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span > <Icon type="appstore" />直播管理</span>}>
        <Item key="5"><Link to={{ pathname: 'frame', query: { meHref: "leftMemu" ,meName:"a1_content_manager",conHref:"cms/initliveContentListPage",conName:"liveContentListReadey"} }}>频道管理</Link></Item>
        <Item key="6"><Link to={{ pathname: 'frame', query: { meHref: "leftMemu" ,meName:"a1_content_manager",conHref:"cms/initContentListPage",conName:"contentListReadey"} }}>回看转点播</Link></Item>
        <Item key="7"><Link to={{ pathname: 'frame', query: { meHref: "leftMemu" ,meName:"a1_content_manager",conHref:"cms/initCompositeContents",conName:"contentPackageListReadey"} }}>虚拟轮播频道</Link></Item>
      </SubMenu>
      <SubMenu key="sub3" title={<span> <Icon type="usb" />资源管理</span>}>
        <Item key="9">直播源管理</Item>
      </SubMenu>
      <SubMenu key="sub4" title={<span> <Icon type="tool" />直播录制任务管理</span>}>
        <Item key="15">直播录制任务管理</Item>
      </SubMenu>
    </Menu>
  )
}

IndexSider.propTypes = {
};

export default IndexSider;
