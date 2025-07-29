import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}
const queryClient = new QueryClient()
export const Portfolio = ({children}:Props) => {
  return (
    <>
    <QueryClientProvider client={queryClient}>

   {children}
    </QueryClientProvider>
    </>
  )
}
