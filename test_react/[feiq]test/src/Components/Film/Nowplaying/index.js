import React,{Component} from "react";
import styles from  "./index.scss";
import InfiniteScroll from 'react-infinite-scroller';

// console.log(styles);
import Child from "./Child";
class NowPlaying extends Component{
	constructor(){
		super();
		this.state = {
			list:[],
			loading:true,
		}

		this.current=1; //当前页面
		this.total = 0;//总页数
	}

	componentDidMount() {
	    axios.get("/v4/api/film/now-playing?__t=1515650278229&page=1&count=7").then(res=>{
	    	this.setState({
	    		list:res.data.data.films
	    	})

	    	this.total = res.data.data.page.total
	    })
	}

	render(){
		return <div id={styles.nowplaying}>
		<Child {...this.props}/>
		{
			// 父所有属性 再传个 子组件
		}
		<InfiniteScroll
		    initialLoad={false}
		    threshold={10}
		    loadMore={this.loaderMoreFunc.bind(this)}
		    hasMore={this.state.loading}
		    loader={<div className="loader">Loading ...</div>}
		>


			<ul>
				{
					this.state.list.map(item=>
						<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>

						<img src={item.poster.origin}/>
						<div>
							<h3>{item.name}</h3>
							<p>{item.intro}</p>
						</div>
						</li>
					)
				}
			</ul>
			</InfiniteScroll>
		</div>
	}

	handleClick(id){
		console.log(id);
		// router.push
		this.props.history.push(`/detail/${id}`);
	}


	loaderMoreFunc(){
		console.log("到底部了");


		this.current++;

		if(this.current>this.total){
			this.setState({
				loading:false
			})
			return ;
		}
		axios.get(`/v4/api/film/now-playing?__t=1515650278229&page=${this.current}&count=7`).then(res=>{
	    	this.setState({
	    		list:[...this.state.list,...res.data.data.films]
	    	})
	    })
	}
}

export default NowPlaying;