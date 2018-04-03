import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect, //重定向的组件
  Switch
} from 'react-router-dom'
// BrowserRouter 正常ulr 路径
// HashRouter hash 路径


import Home from "@/Components/Home";
import Card from "@/Components/Card";
import Film from "@/Components/Film";
import App from "@/Components/App";

import NowPlaying from "@/Components/Film/NowPlaying";
import ComingSoon from "@/Components/Film/ComingSoon";

import Detail from "@/Components/Detail";


import {Provider} from "react-redux";
import store from "@/Redux/Store";
//jsx 语法 解析 需要react 模块
const router = (
	<Provider store={store}>
	<Router>
		<App>
			<Switch> 
			{
				//switch 只加载匹配到第一个孩子路由
			}
			<Route path="/home" component={Home}/>

			<Route path="/card" component={Card}/>

			{/*<Route path="/film" component = {Film}/>*/}

			<Route path="/film" render={()=>
				<Film>
					<Switch>
					<Route path="/film/nowplaying" component={NowPlaying}/>
					<Route path="/film/comingsoon" component={ComingSoon}/>
					<Redirect from="/film" to="/film/nowplaying"/>
					</Switch>
				</Film>
			}/>

			<Route path="/detail/:id" component={Detail}/>

			<Redirect from="/" to="/home"/>
			</Switch>
		</App>	
	</Router>
	</Provider>)



export  default router;