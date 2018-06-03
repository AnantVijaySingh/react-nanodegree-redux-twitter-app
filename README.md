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


<u>Example Store Structure</u>
{<br>
authedUser: "tylermcginnis"<br>
loadingBar: Object { default: 0 }<br>
tweets: Object { 8xf0y6ziyjabvozdd253nd: {…}, 5c9qojr2d1738zlx09afby: {…}, f4xzgapq7mu783k9t02ghx: {…}, … }<br>
users: Object { sarah_edo: {…}, tylermcginnis: {…}, dan_abramov: {…} }<br>
}

Example Tweet Structure

tweets: {…}<br>
​​2mb6re13q842wu8n106bhk: {…}<br>
​​​author: "sarah_edo"<br>
​​​id: "2mb6re13q842wu8n106bhk"<br>
​​​likes: (1) […]<br>
    ​​​​0: "dan_abramov"​​​​<br>
​​​replies: (1) […]<br>
    0: "26p5pskqi88i58qmza2gid"<br>
replyingTo: null<br>
​text: "I think I realized I like dogs so much because I can really relate to being motivated by snacks"<br>
​​​timeStamp: undefined<br>
​​​timestamp: 1514043995650<br>