// rfce
import { forwardRef } from 'react';
import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,

},ref)=> {
  return (
    <div className='post' ref={ref}>
        <div className='post_avatar'>
            <Avatar src = {avatar}></Avatar>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_header_text'>
                    <h3>
                        {displayName} {" "}
                        <span className='post__headerSpecial'>
                        {verified &&<VerifiedUserIcon className='post_badge'></VerifiedUserIcon>} 
                         @{username} 
                        </span>
                       
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>
                   {text}

                    </p>

                </div>
            </div>
            <img 
            src = {image}
            alt='fun url'
            ></img>
            <div className='post_footer'>
                <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
                <RepeatIcon fontSize='small'></RepeatIcon>
                <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
                <PublishIcon fontSize='small'></PublishIcon>

            </div>
        </div>
      
    </div>
  )
})

export default Post
