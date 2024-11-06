import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import store from './store/store.js'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Provider } from 'react-redux'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:'/',
      element:<Home/>},
      {path:'/about',
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
