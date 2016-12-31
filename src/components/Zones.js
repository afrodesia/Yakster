import React from 'react'
import Zone from './Zone'


class Zones extends React.Component{
	render(){
		return(
			<div className="Zones container">
				<h2>Zones</h2>
				
				<ol>

					<li> <Zone/> </li>
					<li> <Zone/> </li>
					<li> <Zone/> </li>
					<li> <Zone/> </li>
					
				</ol>
			</div>
		)
	}
}
export default Zones
