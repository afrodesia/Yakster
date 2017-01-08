import React, {Component} from 'react'
// import Zones from './Zones'


class Comment extends Component{

	render(){
		return(
			<div className="Comment">
                <span className="chat-img pull-left">
                   <img src="http://placehold.it/80/30a5ff/fff" alt="User Avatar" className="img-circle" />
                </span>
                    <div className="chat-body clearfix">
                        <div className="header">
                            <strong className="primary-font">John Doe</strong> 
                            <small className="text-muted">32 mins ago</small>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante turpis, rutrum ut ullamcorper sed, dapibus ac nunc. Vivamus luctus convallis mauris, eu gravida tortor aliquam ultricies. </p> 
                    </div>
			</div>
            
		)
	}
}
export default Comment