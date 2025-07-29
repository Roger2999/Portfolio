import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PortfolioRoutes } from './PortfolioRoutes'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioRoutes />
  </StrictMode>,
)
