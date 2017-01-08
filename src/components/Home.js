import React, {Component} from 'react'
import Zones from './zones/Zones'
import Comments from './comments/Comments'

class Home extends Component{

	render(){
		return(
			<div className="Home">
				<h1>Yakster</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <Zones />
                    </div>
                    <div className="col-lg-8">
                        <Comments />
                    </div>
                </div>
			</div>

		)
	}
}
export default Home
