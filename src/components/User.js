import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    
    return (
        <div className='border p-2 shadow'>
            <h4><strong> <Link to={`user-details/${user.id}`}> {user.username}</Link></strong></h4>
        </div>
    )
}

export default User
