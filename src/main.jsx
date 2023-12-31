import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Post from './components/Post/Post.jsx';
import Fastpage from './components/Fastpage/Fastpage.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';
import Postdetail from './components/Postdetail/Postdetail.jsx';
import Error from './components/Error/Error.jsx';
import Countries from './components/Countries/Countries.jsx';
import Countrydetail from './components/Countrydetail/Countrydetail.jsx';
const router= createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Fastpage></Fastpage>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/post',
        element: <Post></Post>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <Postdetail></Postdetail>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: '/countries',
        element: <Countries></Countries>,
        loader: ()=> fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: '/country/:ccn3',
        element: <Countrydetail></Countrydetail>,
        loader: ({params})=>fetch(`https://restcountries.com/v3.1/alpha?codes=${params.ccn3}`)
      }
      ,
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <RouterProvider router={router} />
  </React.StrictMode>,
)
