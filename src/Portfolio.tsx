import type { ReactNode } from "react"
import { Header } from "./components"
import { BrowserRouter } from "react-router-dom"
import "./Portfolio.css"
interface Props {
    children: ReactNode
}

export const Portfolio = ({children}:Props) => {
  return (
    <BrowserRouter>
      <Header/>
      <div data-theme="dark" className="content">
        {children}
      </div>
    </BrowserRouter>
  )
}
