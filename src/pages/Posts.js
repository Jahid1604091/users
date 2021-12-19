import React, { useContext } from 'react'
import { userContext } from '../App'
import Post from '../components/Post'

const Posts = () => {
  
    const {posts} = useContext(userContext)
   
    return (
        <div className='container'>
            {posts.map(p => <Post key={p.id} post={p} />)}
        </div>
    )
}

export default Posts
