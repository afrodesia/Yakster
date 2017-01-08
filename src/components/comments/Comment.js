import React, {Component} from 'react'


class Comment extends Component{

    
	render(){
		return(
			<div className="Comment">
                <span className="chat-img pull-left">
                   <img src="http://placehold.it/80/30a5ff/fff" alt="User Avatar" className="img-circle" />
                </span>
                    <div className="chat-body clearfix">
                        <div className="header">
                            <strong className="primary-font">{this.props.currentComment.username}</strong> 
                            <small className="text-muted">{this.props.currentComment.time}</small>
                        </div>
                        <p>{this.props.currentComment.body}</p> 
                    </div>
			</div>
            
		)
	}
}
export default Comment