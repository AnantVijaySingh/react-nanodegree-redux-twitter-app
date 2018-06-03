import React,{Component} from 'react';
import {connect} from 'react-redux';
import {handleAddTweet} from '../actions/tweets';
import {Redirect} from 'react-router-dom';

class NewTweet extends Component {

    state = {
        text: '',
        toHome: false
    };

    handleChange = (e) => {
      const text = e.target.value;

      this.setState(() => ({
          text
      }))
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { text } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleAddTweet(text, id));

        this.setState(() => ({
            text: '',
            toHome: id ? false : true, // As we only want to redirect to home if we are on a new tweet page and not when we are replying to a tweet
        }))
    };

    render() {

        const tweetLeft = 280 - this.state.text.length;


        {/** Redirect to homeview if submitted as a new tweet instead of a reply to a tweet**/}
        if( this.state.toHome === true) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit} >
                    <textarea
                        placeholder="What's happening"
                        value={this.state.text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}>
                    </textarea>
                    {
                        tweetLeft <= 100 && (<div className='tweet-length'>{tweetLeft}</div>)
                    }
                    <button
                        className='btn'
                        type='submit'
                        disabled={this.state.text.length === 0}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


export default connect()(NewTweet);