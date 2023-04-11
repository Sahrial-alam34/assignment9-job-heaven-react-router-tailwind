import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import StartApplied from './components/StartApplied/StartApplied';
import ErrorPage from './components/Error-Page/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import { cartData } from './loaders/getCartData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage />,
    
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader:()=>fetch('/features.json'),
        
      },
      {
        path: 'jobDetails/:jobId',
        element: <JobDetails></JobDetails>,
        loader:()=>fetch('/features.json'),
        
        
      
      },
      {
        path: 'statistics',
        element:<Statistics></Statistics>
      },
      {
        path: 'appliedJob',
        element: <AppliedJobs></AppliedJobs>,
        loader: cartData,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'startApplied',
        element: <StartApplied></StartApplied>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
