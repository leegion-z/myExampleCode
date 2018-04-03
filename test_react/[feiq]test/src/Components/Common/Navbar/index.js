import React,{Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import {connect} from "react-redux";

class Navbar extends Component{
	constructor(){
		super();
	}

	render(){
		return <nav>
			<div className="left">
				<i className="iconfont icon-all" onClick={()=>{
					this.props.event();
				}}></i>
				<span>{this.props.mytitle}</span>
			</div>

			<div className="right">
				<span>大连</span>
				<i className="iconfont icon-account" onClick={()=>{
					this.props.history.push("/card");
				}}></i>
			</div>
		</nav>
	}
}

export default connect(
	(state)=>{
		console.log(state);
		return {
			mytitle:state.changetitleReducer
		}
	},

	null,
	)(Navbar);