import React from 'react'
import Zone from './Zone'


class Zones extends React.Component{
	render(){

		const firstZone = {name:'Zone 1', zipCode: '60153', numComments:14}
		const secondZone = {name:'Zone 2', zipCode: '60551', numComments:33}
		const thirdZone = {name:'Zone 3', zipCode: '60621', numComments:150}
		const fourthZone = {name:'Zone 4', zipCode: '60458', numComments:51}

		return(
			<div className="Zones container">
				<h2>Zones</h2>
				
				<ol>

					<li> <Zone zone={firstZone} /> </li>
					<li> <Zone zone={secondZone} /> </li>
					<li> <Zone zone={thirdZone} /> </li>
					<li> <Zone zone={fourthZone} /> </li>
					
				</ol>
			</div>
		)
	}
}
export default Zones
