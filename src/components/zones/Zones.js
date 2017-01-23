import React, {Component} from 'react'
import Zone from './Zone'
import superagent from 'superagent'



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
			]
		}
	}
	componentDidMount() {
		console.log('componentDidMount')

		superagent
		.get('api/zone')
		.query(null)
		.set('Accept', 'application/json')
		.end((err,response) => {
			if(err){
				console.log('ERROR' + err)
				return
			}
			console.log(JSON.stringify(response.body))
			let results = response.body.results

			this.setState({
				list: results
			})
		})

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
				<ul>
				  	{ listItems }
				</ul>
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
