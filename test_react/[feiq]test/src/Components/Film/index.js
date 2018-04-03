import React,{Component} from "react";
import styles from "./index.scss";
import { NavLink } from "react-router-dom";
class Film extends Component{
	constructor(){
		super();
	}

	render(){
		return <div id="film">
			<ul className={styles.header}>
				<li>
					<NavLink to="/film/nowplaying" activeClassName={styles.active}>nowplaying</NavLink>
				</li>
				<li>
					<NavLink to="/film/comingsoon" activeClassName={styles.active}>comingsoon</NavLink>
				</li>
			
			</ul>

			{
				//路由容器
			}
			{this.props.children}
		</div>
	}
}

export default Film;