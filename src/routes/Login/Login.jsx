import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Button, Row, Form, Input} from 'antd';
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
    <div className={styles.loginBg}>
      <div className={styles.login_content}>
        <section className={styles.login_form}>
          <div className={styles.login_title}>
            <div>
              <img src={require('../../assets/logo.png')} alt="" className={styles.login_logo}/>
            </div>
            <h2><FormattedMessage {...messages.title}/></h2>
          </div>
          <div className={styles.login_input}>
            <Form layout='horizontal'>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage(messages.username.vtype)
                    }
                  ]
                })(<Input type="text" placeholder={formatMessage(messages.username.label)} className={styles.input} onPressEnter={handleOk}/>)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage(messages.password.vtype)
                    }
                  ]
                })(<Input type="password" autoComplete="off" placeholder={formatMessage(messages.password.label)} className={styles.input} onPressEnter={handleOk}/>)}
              </FormItem>
              <FormItem>
                <Button type="primary" className={styles.login_btn} onClick={handleOk}>
                  <FormattedMessage {...messages.login}/>
                </Button>
              </FormItem>
            </Form>
          </div>
        </section>
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
