import React,{Component} from "react";
import styles from "./index.scss";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class Sidebar extends Component{
	constructor(){
		super();
	}

	render(){
		return <div>
			<ReactCSSTransitionGroup
          transitionName="kerwin"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

			{
				this.props.show?
				<aside>
					<ul onClick={()=>{
						//子传父
						this.props.event();
					}}>
						<li>
							<NavLink to="/home" activeClassName={styles.active}>home</NavLink>
						</li>
						<li>
							<NavLink to="/film" activeClassName={styles.active}>film</NavLink>
						</li>
						<li>
							<NavLink to="/card" activeClassName={styles.active}>card</NavLink>
						</li>
					</ul>
				</aside>
				:null
			}
			</ReactCSSTransitionGroup>
		</div>
	}
}

export default Sidebar;