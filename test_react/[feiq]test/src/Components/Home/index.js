import React,{Component} from "react";
import "./index.scss";
import ReactSwipe from 'react-swipe';
import { ActivityIndicator } from 'antd-mobile';

class Home extends Component{
	constructor(){
		super();
		this.state = {
			looplist:[],
			show:true
		}
	}


 	componentDidMount() {
 	    
 	    axios.get("/v4/api/billboard/home?__t=1515566754363").then(res=>{
 	    	console.log(res.data);

 	    	this.setState({
 	    		looplist:res.data.data.billboards,
 	    		show:false
 	    	})
 	    })
 	}

	render(){
		return <div>
			{
				//key 值改变后， 组件会重新创建
			}

			<ActivityIndicator text="正在加载" toast animating={this.state.show}/>	
			 <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}} key={this.state.looplist.length}>
                {
                	this.state.looplist.map(item=>
                		<img src={item.imageUrl} key={item.id}/>
                	)
                }
            </ReactSwipe>
		</div>
	}
}

export default Home;