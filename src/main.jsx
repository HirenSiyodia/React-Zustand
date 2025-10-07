import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './components/Home.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import User from './User/User.jsx'
import Github from './git/Github.jsx'
import Loader, { githubLoader } from './Loader/Loader.jsx'
import Login from './components/Login.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// second Easiest method for routing..
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='github' element={<Github/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route path='login' element={<Login/>}/>
    <Route loader={githubLoader} path='loader' element={<Loader/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
