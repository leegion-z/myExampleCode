import {createStore} from "redux";
import {reducer,reducer2} from "../Reducer";
import {combineReducers} from "redux";

//合并所有的reducer 为一个大的reducer

const myreducer = combineReducers({
	changetitleReducer:reducer,
	changeListReducer:reducer2
})


import thunk from 'redux-thunk'; //引入中间件 做异步请求
import {applyMiddleware,compose } from "redux";
import promiseMiddleware from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//createStore 接受一个参数 ，是我们自己创建的reducer;
const store  = createStore(myreducer,
	composeEnhancers(applyMiddleware(thunk,promiseMiddleware)));


export default store;