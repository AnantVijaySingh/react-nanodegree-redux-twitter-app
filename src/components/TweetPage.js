import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tweet from './Tweet';
import NewTweet from './NewTweet';

class TweetPage extends Component {
    render() {

        const { id, replies} = this.props;

        return (
            <div>
                <Tweet id={id}/>
                <NewTweet id={id}/>
                {replies.length !==0 && (<h3 className='center'>Replies</h3>)}
                <ul>
                {replies.length !==0 &&(
                    replies.map((id) => (<li key={id}><Tweet id={id}/></li>))
                )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, tweets}, props) { // props here gets the props object, we can deconstruct it here itself into match the actual prop that is being passed from the parent component
 const {id} = props.match.params;

 return {
     id,
     replies: !tweets[id]
     ? []
     : tweets[id].replies.sort((a,b) => tweets[b].timeStamp - tweets[a].time)
 }
}

export default connect(mapStateToProps)(TweetPage);