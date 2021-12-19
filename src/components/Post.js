import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { userContext } from '../App'
import Posts from '../pages/Posts'

const Post = ({ post }) => {
    const { users } = useContext(userContext)
    const user = users.find(u => u.id == post.userId)
    // console.log(user)
    return (
        <Wrapper>
            <div className='post py-2'>
                <h5>{post.title}</h5>
                <p>posted by - {user.name}</p>
                <Link to={`/post-details/${post.id}`} className="btn">post details</Link>
            </div>
        </Wrapper>

    )
}


const Wrapper = styled.section`
    .post{
        border-bottom:1px solid var(--clr-primary-5);
        text-transform:capitalize;
    }
`
export default Post
