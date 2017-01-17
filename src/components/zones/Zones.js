import React, {Component} from 'react'
import Zone from './Zone'



class Zones extends Component{
	constructor(){
		super()
		this.state = {
			zones: {
				name: '',
				zipCode: ''
			},
			list : [
				// { name:'Zone 1', zipCode: '60153', numComments:14 },
				// { name:'Zone 2', zipCode: '60551', numComments:33 },
				// { name:'Zone 3', zipCode: '60621', numComments:150 },
				// { name:'Zone 4', zipCode: '60458', numComments:51 },
				// { name:'Zone 5', zipCode: '60658', numComments:41 }
			]
		}
	}
	updateZone(event){
		console.log('UpdateZone '+event.target.id +' == '+event.target.value)
		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone[event.target.id] = event.target.value
		this.setState({
			zone: updatedZone
		})
	}
	addZone(){
		console.log('Add Zone: ' +JSON.stringify(this.state.zone))
		let updateList = Object.assign([], this.state.list)
		updateList.push(this.state.zone)
		this.setState({
			list: updateList
		})
	}
	render(){
	
		const listItems = this.state.list.map((zone, i) => {
			return(
				<li key={i}><Zone currentZone={zone} /></li>
			)
		})

		return(
			<div className="Zones">
				<ol>
				  	{ listItems }
				</ol>
				<div className="AddZone-form">
				<h3>Add Zone</h3>
			      <input id="name" onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Name" />
			      <input id="zipCode" onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Zipcode" />
			      <button onClick={this.addZone.bind(this)} className="btn btn-danger" type="submit">Enter</button>
			    </div>
			</div>
		)
	}
}
export default Zones
