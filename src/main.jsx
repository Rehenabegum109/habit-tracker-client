import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router/dom";
import { router } from './Components/Route/Route.jsx';
import { AuthProvider } from './Components/Contexts/AuthContexts.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
         <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
<RouterProvider router={router} />
    </AuthProvider>
     
  </StrictMode>,
)
