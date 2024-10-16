import React  from 'react'
import {useState} from 'react'
import './TweetBox.css'
import { Avatar , Button } from '@mui/material'
import db from './firebase'

function TweetBox() {
    const [tweetMessage , setTweetMessage] = useState("");
    const [tweetImage , setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName : 'Satyam',
            username : 'Satty',
            verified: true,
            text:tweetMessage,
            image:tweetImage,

            avatar:"https://wallpapers.com/images/hd/cool-profile-picture-7aecpj5vptd1a0ib.jpg"



        });
        setTweetMessage("");
        setTweetImage("");
    }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://cdn.vectorstock.com/i/1000v/06/86/cartoon-of-young-hipster-man-with-laptop-vector-4820686.avif' ></Avatar>
                <input 
                onChange={e=> setTweetMessage(e.target.value)}
                value={tweetMessage}
                 placeholder=" What's happening ? " type='text'></input>
                {/* <input placeholder=" Enter image url " type='text'></input> */}

            </div>
            <input 
             onChange={e=> setTweetImage(e.target.value)}
             value={tweetImage}

                className='tweetBox__image_input'  
                placeholder=" Enter image url "
                type='text'>

            </input>

            <Button type='submit' onClick={sendTweet} className='tweetboxButton'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default TweetBox
