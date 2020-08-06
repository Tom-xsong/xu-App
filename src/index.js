import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//重置样式
import "./assets/css/reset.css"

//rem.js
import "./assets/js/rem"

//引入图片



//定义路由模式
import { HashRouter, BrowserRouter } from "react-router-dom"
ReactDOM.render(
<HashRouter>
  <App />
</HashRouter>
,
  document.getElementById('root')
);
