import React,{useEffect, useState} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
      //code....
      db.collection('posts').onSnapshot(snapshot =>(
        setPosts(snapshot.docs.map(doc => doc.data()))
      ))

    },[]);
  return (

    <div className='feed'>
      {/* Header */}

      

      <div className='feed__header'>
      <h2 >Home</h2>
      </div>

      {/* Tweet-Box*/}

      <TweetBox/>


      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}

      <FlipMove>
      {posts.map(post =>(
        <Post 
        key={post.text}
        displayName = {post.displayName} 
         username = {post.username}  
         verified ={post.verified}
        text =  {post.text}
        avatar = {post.avatar}
        image =  {post.image}
        />

      ))}
      </FlipMove>

      <Post displayName = 'Ritik Jha'  username = "jha"  verified ={true}
         text =  "I am ritik jha from kalyan mumbai  " 
         avatar = "https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg"
         image =  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3ZvYXk3dGt2YXlqanlhOTN0NXEzcWZtYnN4cml2cXB4b3VoMzJxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W4NayTLw25aXUJjZUa/giphy.webp"
         />
      <Post displayName="Sattym" username="satty" verified={true}
      text = "It can be tough when the job market feels uncertain, but there are still ways to earn and create opportunities for yourself. Here are a few ideas:"
      avatar = "https://previews.123rf.com/images/yupiramos/yupiramos2004/yupiramos200419030/144802883-businessman-using-face-mask-searching-work-vector-illustration-design.jpg"
      image = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2ZrYzI1OWFvcHRybXRqbWFxMTd1YndldG8xOHo1Y2t6Njd3eDBpbiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/fCCCy9QuTtsFM9S88n/giphy.gif"
      />
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/> */}

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}

    </div>
  )
}

export default Feed
