import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomePage from './pages/HomePage';
import "./assets/styles.css"
import PlayerPage from './pages/PlayerPage';

const router = createBrowserRouter ([
  {  
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/players/:playerId",
        element: <PlayerPage />
      }
    ]
  }
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />  
  </StrictMode>,
)
