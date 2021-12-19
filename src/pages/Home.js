import React, { useContext } from 'react'
import styled from 'styled-components'
import { userContext } from '../App'
import User from '../components/User'



const Home = () => {
    const {users} = useContext(userContext)
  
    return (
        <Wrapper>
            <div className='container'>

                <div className="row">
                    <div className="col-md-8">
                        <h2 className='py-2'>All users</h2>
                       
                        {
                            users.map((user,idx)=>{
                               return <User key={idx} user={user}/>
                            })
                        }
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    background-color: var(--clr-primary-9);
`

export default Home
