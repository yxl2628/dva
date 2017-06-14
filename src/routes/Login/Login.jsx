import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Button, Row, Form, Input, Icon} from 'antd';
import {injectIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styles from './login.less';

const FormItem = Form.Item;

function Login({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  },
  intl: {
    formatMessage
  }
}) {
  const {loginLoading} = login;
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({type: 'login/login', payload: values});
    })
  }
  return (
    <div className={styles.login_content} >
      <div className={styles.login_header} >
        <div className={styles.login_title}>
          <div className={styles.login_logo}>
            <img src={require('../../assets/logo.png')} alt=""/>
          </div>
          <h2><FormattedMessage {...messages.title}/></h2>
        </div>
      </div>
      <div className={styles.login_body} >
        <div className={styles.body_content}>
          <div className={styles.body_left}>
            <img src={require('../../assets/bg-left.png')} />
          </div>
          <div className={styles.body_form}>
            <Form layout='horizontal' className={styles.form}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage(messages.username.vtype)
                    }
                  ]
                })(<Input type="text" size="large" prefix={<Icon type="user" className={styles.input_icon} />} placeholder={formatMessage(messages.username.label)} className={styles.input} onPressEnter={handleOk}/>)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage(messages.password.vtype)
                    }
                  ]
                })(<Input type="password" size="large" prefix={<Icon type="lock" className={styles.input_icon} />} autoComplete="off" placeholder={formatMessage(messages.password.label)} className={styles.input} onPressEnter={handleOk}/>)}
              </FormItem>
              <FormItem>
                <Button type="primary" className={styles.login_btn} onClick={handleOk} >
                  <FormattedMessage {...messages.login}/><Icon type="right" className={styles.button_icon}/>
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
      <div className={styles.login_footer} >
        <div className={styles.footer_title}>北京四达时代科技技术有限公司</div>
        <div className={styles.footer_copyright}>CopyRight© 2017 StarTimes All Right Reserved </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  intl: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({login}) {
  return {login}
}

export default injectIntl(connect(mapStateToProps)(Form.create()(Login)))
