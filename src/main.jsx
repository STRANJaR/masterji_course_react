import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OtpForm from './components/OtpForm.jsx';
import CourseList from './components/CouseList.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <OtpForm/>
  },
  {
    path: '/course-list',
    element: <CourseList/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  
)
