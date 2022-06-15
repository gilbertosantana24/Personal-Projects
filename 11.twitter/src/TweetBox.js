import React, { useState } from 'react'

function TweetBox() {

    const [tweet, setTweet] = useState("")

    const [feed, setFeed] = useState([]);

    let date = new Date();

    const handleTweetbox = (e) => {
        e.preventDefault();
        setFeed([...feed, 
            {
                hour: date.getHours(),
                minutes: date.getMinutes(),
                tweet: tweet
            }
        ]);
        setTweet("");
    };

    const handleInput = (e) => {
        setTweet(e.target.value);  
    }


    return (
    <div className='tweetbox'>
        
            <form onSubmit={handleTweetbox}>
                <input type="text" value={tweet} placeholder="What are you thinking?" onChange={(e)=>handleInput(e)}></input>
                <button type="submit" >Tweet!</button>
            </form>
            {feed.map((tweet) => {
                return <>
            <div className='feed'>
                {tweet.tweet} {tweet.hour}:{tweet.minutes}
            </div>
            </>
        })}
        </div>


    )
}

export default TweetBox