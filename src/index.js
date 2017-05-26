import dva from 'dva';
import './index.less';
import {browserHistory} from 'dva/router';
import {LocaleProvider,message} from 'antd';
import {addLocaleData, IntlProvider} from 'react-intl';
import createLoading from 'dva-loading';
import ReactDOM from 'react-dom';

const appLocale = window.appLocale;

// 1. Initialize
const app = dva({
  // history: browserHistory,
  onError (error) {
    const errorResult = appLocale.messages[error.message];
    message.error(errorResult?errorResult:"Error");
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/app'));

// 4. Router
app.router(require('./router/router'));

// 5. Start
const App = app.start();

//il8n
ReactDOM.render(
    <LocaleProvider locale={appLocale.antd}>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
            <App />
        </IntlProvider>
    </LocaleProvider>,
    document.getElementById("root")
);
