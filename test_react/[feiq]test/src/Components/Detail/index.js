import React,{Component} from "react";
import "./index.scss";

import {connect} from "react-redux";
// detail 组件 UI 组件
// react-redux 中connect 方法 把UI 组件外面包装一个容器组件
class Detail extends Component{
	constructor(){
		super();
		this.state={
			info:null
		}
	}


	componentDidMount() {
	    axios.get(`/v4/api/film/${this.props.match.params.id}?__t=1515653073703`).then(res=>{
	    	console.log(res.data);
	    	this.setState({
	    		info:res.data.data.film
	    	})

	    	this.props.changetitle(res.data.data.film.name);
	    })


	}

	render(){
		return <div>
			detail--{this.props.match.params.id}
			{
				this.state.info?
				<div>
					<img src={this.state.info.cover.origin}/>

					<h2>{this.state.info.name}</h2>
				</div>
				:null
			}
		</div>
	}
}

export default connect(
	null,

	{
		changetitle:(name)=>{
			// console.log(name);
			//自动dispatch 消息
			
			return {
				type:"CHANGE_TITLE",
				payload:name
			}
		}
	}	

	)(Detail);



/*

 	connenct(
		mapStatetoProp (将store中的状态映射成属性)，
	    mapDispatchtoProp (将dispatch方法映射成属性)
 	)(自己UI组件)


*/