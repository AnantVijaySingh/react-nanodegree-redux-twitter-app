# react-nanodegree-redux-twitter-app
A simple twitter app. Part of Udacity React Nanodegree.

<u>Redux Store Structure<br></u>

{<br>
__tweets: {<br>
____tweetId: { tweet id, author’s id, timestamp, text, likes, replies, replyingTo},<br>
____tweetId: { tweet id, author’s id, timestamp, text, likes, replies, replyingTo}<br>
__},<br>
__users: {<br>
____userId: {user’s id, user’s name, avatar, tweets array},<br>
____userId: {user’s id, user’s name, avatar, tweets array}<br>
__},<br>
__authedUser: userId<br>
}
