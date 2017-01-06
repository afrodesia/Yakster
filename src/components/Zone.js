import React from 'react'

class Zone extends React.Component{
	render(){
		return(
			<div className="Zone panel panel-info">		
				<div className="panel-heading"><a href="#">{this.props.zone.name}</a></div>
				<div className="panel-body">
				<p>{this.props.zone.zipCode}</p>
				<p>{this.props.zone.commentCount} comments</p>
				</div>
			</div>
		)
	}
}
export default Zone
