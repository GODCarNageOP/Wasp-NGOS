import Navbar from './components/navbar/Navbar'
import './App.scss'
import '../src/styles.scss'
import Login from './pages/Login'
import Register from './pages/Register'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Home from './pages/home/Home';

import Chating from './pages/chating/Chating.jsx'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'



const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}


const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  if (!currentUser) {
    return <Navigate to='/' />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chating",
        element: <ProtectedRoute><Chating /></ProtectedRoute>,
      },
      // {
      //   path: "/myGigs",
      //   element: <MyGigs />,
      // },
      // {
      //   path: "/orders",
      //   element: <Orders />,
      // },
      // {
      //   path: "/messages",
      //   element: <Messages />,
      // },
      // {
      //   path: "/message/:id",
      //   element: <Message />,
      // },
      // {
      //   path: "/add",
      //   element: <Add />,
      // },
      // {
      //   path: "/gig/:id",
      //   element: <Gig />,
      // },

    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);



function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
