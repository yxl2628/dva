/**
 * Created by wyf on 2017/3/3.
 */
import {defineMessages} from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'common.login.title',
        defaultMessage: '欢迎登录STAROTT'
    },
    username: {
        label: {
            id: 'common.login.username.label',
            defaultMessage: '用户名'
        },
        vtype: {
            id: 'common.login.username.vtype',
            defaultMessage: '用户名必填！'
        }
    },
    password: {
        label: {
            id: 'common.login.password.label',
            defaultMessage: '密码'
        },
        vtype: {
            id: 'common.login.password.vtype',
            defaultMessage: '密码必填！'
        }
    },
    remember: {
        id: 'common.login.remember',
        defaultMessage: '记住',
    },
    forgotPass: {
        id: 'common.login.forgotPass',
        defaultMessage: '忘记密码'
    },
    login: {
        id: 'common.login.login',
        defaultMessage: '登录'
    },
});

export default messages;
