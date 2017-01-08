import React, {Component} from 'react'
import Comment from './Comment'


class Comments extends Component{
    constructor(){
        super()
        this.state = {
            list : [
                { body: 'Thank you!! ', username: 'Ken', time: '4hrs ago'},
                { body: 'Ya Ya', username: 'Mika', time: '3hrs ago'},
                { body: 'I love you Ken !! ', username: 'Haeri', time: '2hrs ago'},
                { body: 'Wow who are you and what do you do?? ', username: 'Moo', time: '2min ago'},
                { body: 'Go Away ', username: 'M', time: '1min ago'}
            ]
        }
    }
	render(){

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li className="left clearfix"><Comment currentComment={comment}/></li>
            )
        })
		return(
			<div className="Comments chat">
                <div className="" id="accordion">
                   <h2>Comments Zone Header</h2>
                </div>
                <div className="panel-body">
                    <ul> 
                      {commentList}
                    </ul>
                </div>
			</div>
            
		)
	}
}
export default Comments
