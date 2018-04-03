import React from "react";
import ReactDOM  from "react-dom";

// import App from "./Components/App";
import router from "./Router";


//引入样式
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

ReactDOM.render(router,document.getElementById("box"));