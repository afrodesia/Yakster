import React, {Component} from 'react'

class Zone extends Component{
	render(){
		const zipCode = this.props.currentZone.zipCodes[0]
		return(
			<div className="Zone panel panel-info">		
				<div className="panel-heading">
					<a href="#">{this.props.currentZone.name}</a>
				</div>
				<div className="panel-body">
					<p>{zipCode}</p>
					<p>{this.props.currentZone.numComments} comment</p>
				</div>
			</div>
		)
	}
}
export default Zone
