import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>

        </Wrapper>
    )
}

const Wrapper = styled.section`
 background-color: var(--clr-primary-5);
 nav{
     ul{
         display:flex;
         justify-content:center;
         li{
             padding:5px;

             &:hover{
                 background-color:var(--clr-primary-1);
                 transition:var(--transition);
                 
             }
             a{
                 color: var(--clr-primary-10);
             }
         }
     }
 }
`
export default Navbar
