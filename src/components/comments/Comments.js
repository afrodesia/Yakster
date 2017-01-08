import React, {Component} from 'react'
import Comment from './Comment'


class Comments extends Component{
    constructor(){
        super()
        this.state = {
            comment : {
                username: '',
                body: ''
            },
            list : [
                { body: 'Thank you!! ', username: 'Ken', time: '4hrs ago'}
                // { body: 'Ya Ya', username: 'Mika', time: '3hrs ago'},
                // { body: 'I love you Ken !! ', username: 'Haeri', time: '2hrs ago'},
                // { body: 'Wow who are you and what do you do?? ', username: 'Moo', time: '2min ago'},
                // { body: 'Go Away ', username: 'M', time: '1min ago'}
            ]
        }
    }

    updateUserName(event){

        console.log('updated username : ' + event.target.value)

        let updateComment = Object.assign({}, this.state.comment)
        updateComment['username'] = event.target.value
        this.setState({
            comment: updateComment
        })
    }
    updateBody(event){
        console.log('updated comment : ' + event.target.value)

        let updateComment = Object.assign({}, this.state.comment)
        updateComment['body'] = event.target.value
        this.setState({
            comment: updateComment
        })

    }

    submitComment(){
        console.log('button clicked' + JSON.stringify(this.state.comment))
        let updateList = Object.assign([], this.state.list)
        updateList.push(this.state.comment)

        this.setState({
            list: updateList
        })

    }

	render(){

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li key={i} className="left clearfix"><Comment currentComment={comment}/></li>
            )
        })
		return(
			<div className="Comments chat">
                <div className="" id="accordion">

                </div>
                <div className="panel-body">
                    <ul>
                      {commentList}

                    </ul>


                </div>
                <section className="Comment-form">
                 <div className="form-group">
                   <label>Username</label>
                   <input onChange={this.updateUserName.bind(this)}
                       type="text"
                       className="form-control" id="usr"/>
                 </div>
                 <div className="form-group">
                   <label>Enter your Comment</label>
                   <input onChange={this.updateBody.bind(this)}
                       type="text"
                       className="form-control" id="comment" />

                 </div>
                 <button onClick={this.submitComment.bind(this)}
                     className="btn btn-default cmt-btn">Submit Comment</button>
                 </section>
			</div>

		)
	}
}
export default Comments
