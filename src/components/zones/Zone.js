import React, {Component} from 'react'

class Zone extends Component{
	render(){
		return(
			<div className="Zone panel panel-info">		
				<div className="panel-heading">
					<a href="#">{this.props.currentZone.name}</a>
				</div>
				<div className="panel-body">
					<p>{this.props.currentZone.zipCode}</p>
					<p>{this.props.currentZone.numComments} comment</p>
				</div>
			</div>
		)
	}
}
export default Zone
