import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomePage from './pages/HomePages';

const router = createBrowserRouter ([
  {  
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />  
  </StrictMode>,
)
