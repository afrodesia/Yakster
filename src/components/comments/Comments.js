import React, {Component} from 'react'
import Comment from './Comment'
import superagent from 'superagent'

class Comments extends Component{
    constructor(){
        super()
        this.state = {
            comment : {
                username: '',
                body: '',
                timestamp: ''
            },
            list : [
                // { body: 'Thank you!! ', username: 'Ken', time: '4hrs ago'}
            ]
        }
    }
    componentDidMount() {
        console.log('componentDidMount')

        superagent
        .get('api/comment')
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
    updateTimestamp(){
        console.log('timeStamp : ' + event.target.value)

        let updateComment = Object.assign({}, this.state.comment)
        updateComment['timestamp'] = event.target.value
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
                    <h2>Add Comment</h2>
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
                 <div className="form-group">
                   <label>Timestamp</label>
                   <input onChange={this.updateTimestamp.bind(this)}
                       type="text"
                       className="form-control" id="timeStamp" />

                 </div>
                 <button onClick={this.submitComment.bind(this)}
                     className="btn btn-default cmt-btn">Submit Comment</button>
                 </section>
			</div>

		)
	}
}
export default Comments
