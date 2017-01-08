import React, {Component} from 'react'
import Comment from './Comment'


class Comments extends Component{

	render(){
		return(
			<div className="Comments chat">
                <div className="" id="accordion">
                   <h2>Comments Zone Header</h2>
                </div>
                <div className="panel-body">
                    <ul> 
                        <li className="left clearfix"><Comment /></li>
                        <li className="left clearfix"><Comment /></li>
                        <li className="left clearfix"><Comment /></li>
                        <li className="left clearfix"><Comment /></li>
                    </ul>
                </div>
			</div>
            
		)
	}
}
export default Comments
