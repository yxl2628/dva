import appLocaleData from 'react-intl/locale-data/zh';
import zhMessages from './i18n/zh-Hans-CN.messages';

//noinspection JSAnnotator
window.appLocale = {
  messages: {
    ...zhMessages,
  },
  antd: null,
  locale: 'zh-Hans-CN',
  data: appLocaleData,
};
