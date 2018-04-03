import React,{Component} from "react";
import styles from "./index.scss";

console.log(styles);

import Navbar from "@/Components/Common/Navbar";
import Sidebar from "@/Components/Common/Sidebar";

class App extends Component{
	constructor(){
		super();

		this.state={
			show:false
		}
	}

	render(){
		return <div>
			<Navbar event={()=>{
				this.setState({
					show:!this.state.show
				})
			}}/>

			<Sidebar show={this.state.show} event={()=>{
				this.setState({
					show:!this.state.show
				})
			}}/>
			
			
			{
				//路由容器
			}

			<section>
				{this.props.children}
			</section>
		</div>
	}
}

export default App;