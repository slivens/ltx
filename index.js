
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {BrowserRouter,HashRouter} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.less';
// import 'antd/dist/antd.less';
import './assets/iconfot/iconfont';
ReactDOM.render(<HashRouter><App/></HashRouter>,document.getElementById('app'));