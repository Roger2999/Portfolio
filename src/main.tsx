
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { PortfolioRoutes } from './PortfolioRoutes'
import './Portfolio.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <PortfolioRoutes />
    </StrictMode>
  </QueryClientProvider>
)