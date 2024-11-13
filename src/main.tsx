import './index.css'
import { StrictMode } from 'react'
import routes from './routes/Routes'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthenticationProvider } from './contexts/AuthenticationProvider'

const query = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <AuthenticationProvider>
        <RouterProvider router={routes} />
      </AuthenticationProvider>
    </QueryClientProvider>
  </StrictMode>,
)
