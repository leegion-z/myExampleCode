import React,{Component} from "react";
import "./index.scss";

import {connect} from "react-redux";
class Comingsoon extends Component{
	constructor(){
		super();
	}

	componentDidMount() { 
		if(this.props.list.length==0){
			this.props.getListPromise();
		}  
	}


	render(){
		return <div>
				<ul>
				{
					this.props.list.map(item=>
						<li key={item.id} >

						<img src={item.poster.origin}/>
						<div>
							<h3>{item.name}</h3>
							<p>{item.intro}</p>
						</div>
						</li>
					)
				}
			</ul>
		</div>
	}
}

export default connect(
	(state)=>{

		return {
			list:state.changeListReducer
		}

	},

	{
		getList:()=>{

		 	return (dispatch)=>{
		 		axios.get("/v4/api/film/coming-soon?__t=1515721052467&page=1&count=7").then(res=>{
		    	
		    		//发送action 到reducer
					dispatch({
						type:"CHANGE_LIST",
						payload:res.data.data.films
					})

			    })

		 	}

		},

		getListPromise:()=>{

		 	return axios.get("/v4/api/film/coming-soon?__t=1515721052467&page=1&count=7").then(res=>{
		    	
		    		//发送action 到reducer
					return {
						type:"CHANGE_LIST",
						payload:res.data.data.films
					}

			    })

		} 
	}

)(Comingsoon);

//异步 action 必须用middleware 中间件