import React, {Component} from 'react'
import Zone from './Zone'



class Zones extends Component{
	constructor(){
		super()
		this.state = {
			list : [
				{ name:'Zone 1', zipCode: '60153', numComments:14 },
				{ name:'Zone 2', zipCode: '60551', numComments:33 },
				{ name:'Zone 3', zipCode: '60621', numComments:150 },
				{ name:'Zone 4', zipCode: '60458', numComments:51 },
				{ name:'Zone 5', zipCode: '60658', numComments:41 }
			]
		}
	}
	updateZone(event){
		console.log('Update zone')
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

				
			      <input onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Name" />
			      <input onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Zipcode" />
			      <button className="btn btn-danger" type="submit">Enter</button>

			</div>
		)
	}
}
export default Zones
