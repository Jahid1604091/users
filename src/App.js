import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from "./components/Footer";
import Error from "./pages/Error";
import UserDetails from "./components/UserDetails";
import Posts from "./pages/Posts";
import axios from 'axios'
import { createContext, useEffect, useState } from "react";
import PostDetails from "./components/PostDetails";

export const userContext = createContext()

function App() {
  const API = 'https://jsonplaceholder.typicode.com'

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState([])
 

  const fetchUsers = async () => {
    const res = await axios.get(`${API}/users`)
    setUsers(res.data)
  }

  const fetchSingleUser = async (id) => {
    const res = await axios.get(`${API}/users/${id}`)
    setUser(res.data)
  }


  const fetchPosts = async () => {
    const res = await axios.get(`${API}/posts`)
    setPosts(res.data)

  }

  const fetchPost = async (id) => {
    const res = await axios.get(`${API}/posts/${id}`)
    setPost(res.data)

  }

  useEffect(() => {
    fetchUsers()
    fetchPosts()
  }, [])




  return (
    <userContext.Provider value={
      {
        users,posts,fetchSingleUser,user,fetchPost,post
      }
    }>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home  />
          </Route>
          <Route path='/user-details/:id' exact component={UserDetails} />
          <Route path='/posts' exact component={Posts} />
          <Route path='/post-details/:id' exact component={PostDetails} />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
