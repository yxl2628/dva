import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import IndexHeader from '../../components/Home/Header';
import IndexSider from '../../components/Home/Sider';
import styles from './home.less';

function Home({children, dispatch,home}){
    const {SubMenu} = Menu;
    const {Header, Content, Footer, Sider} = Layout;
    const headerProps = { dispatch,menus:home.menus,menuid:home.menuid,selectMenuId:home.selectMenuId,user:home.user };
    const siderProps = { dispatch, childMenus: home.childMenus, childMenuId: home.childMenuId, selectChildMenuId: home.selectChildMenuId };
    return (
      <Layout className={styles.main}>
        <IndexHeader {...headerProps} />
        <Layout>
          <Sider width={250} className={styles.sider}>
            <IndexSider {...siderProps} />
          </Sider>
          <Content className={styles.content}>
            {children}
          </Content>
        </Layout>
      </Layout>
    )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  home: PropTypes.object
};

function mapStateToProps({ home }) {
  return { home };
}

export default connect(mapStateToProps)(Home);
