import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Portfolio = ({children}:Props) => {
  return (
    <>
   {children}
    </>
  )
}
