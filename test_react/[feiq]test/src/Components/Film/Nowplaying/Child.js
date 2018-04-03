import React,{Component} from "react";
class Child extends Component{
	constructor(){
		super();
	}


	render(){
		return <div>
			Child<button onClick={()=>{
				this.props.history.push("/card");
			}}>
				add
			</button>
		</div>
	}
	
}

export default Child;