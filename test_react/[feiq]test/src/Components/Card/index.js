import React,{Component} from "react";
import "./index.scss";

import { Button, notification } from 'antd';
 

class Card extends Component{
	constructor(){
		super();
	}

	render(){
		return <div>
			    <Button type="primary" onClick={this.openNotification.bind(this)}>Primary</Button>
			    <Button icon="check-circle-o">with icon</Button>
		</div>
	}


	openNotification() {
	  notification.open({
	    message: 'Notification Title',
	    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	  });
};
}

export default Card;