import React from 'react'
import './Widget.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed,
    TwitterShareButton,TwitterTweetEmbed
 } from 'react-twitter-embed';
import { Height } from '@mui/icons-material';
import { height } from '@mui/system';

function Widget() {
  return (
    <div className='widgets'>
        {/* <h2>Widgets</h2> */}
        <div className='widgets_input'>
            <SearchIcon className="widgets_searchIcon"></SearchIcon>
            <input placeholder='Search Twitter' type='text'></input>
        </div>

        <div className='widgets_widgetContainer'>
            <h2>What's happening ?</h2>
            <TwitterTweetEmbed tweetId='1825409792115925116'></TwitterTweetEmbed>
            <TwitterTimelineEmbed sourceType='profile' screenName='ICC'options={{height:400}}></TwitterTimelineEmbed>
            <TwitterShareButton url={'https://giphy.com/gifs/ufc-ufc-305-embedded-TZ9XQE1Cd9SX7encMJ'} 
            title='Share'
            options={{text:"React js is awesome" , via:"Satty"}}
             
            > </TwitterShareButton>
        
        </div>
      
    </div>
  )
}

export default Widget;
