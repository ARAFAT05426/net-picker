import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import { AuthenticationProvider } from './contexts/AuthenticationProvider'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthenticationProvider>
        <RouterProvider router={routes} />
      </AuthenticationProvider>
  </StrictMode>,
)
