import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import IndexHeader from '../../components/Home/Header';
import IndexSider from '../../components/Home/Sider';
import styles from './home.less';

function Home({children, dispatch}){
    const {SubMenu} = Menu;
    const {Header, Content, Footer, Sider} = Layout;
    const headerProps = {dispatch};
    return (
      <Layout className={styles.main}>
        <IndexHeader {...headerProps} />
        <Layout>
          <Sider width={250} className={styles.sider}>
            <IndexSider />
          </Sider>
          <Content className={styles.content}>
            {children}
          </Content>
        </Layout>
      </Layout>
    )
}

Home.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func,
  app: PropTypes.object
};

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(Home);
