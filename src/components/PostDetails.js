import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { userContext } from '../App'

const PostDetails = () => {
    const {id} = useParams()
    const { fetchPost, post,users } = useContext(userContext)
   
    const userId = post.userId
    const user =  users.find(u=>u.id == userId)

    
    useEffect(() => {
        fetchPost(id)
       
    }, [id])

   
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col mx-auto">

                    <h3>{post.title}</h3>
                    <p className="lead">{post.body}</p>
                    <h5>Posted by - <i>{user && user.name}</i> </h5>
                       
                   
                </div>

            </div>
        </div>
    </>
    )
}

export default PostDetails
