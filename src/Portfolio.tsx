import type { ReactNode } from "react"
import { Footer, Header } from "./components"
import { BrowserRouter } from "react-router-dom"
import "./Portfolio.css"
interface Props {
    children: ReactNode
}

export const Portfolio = ({children}:Props) => {
  return (
    <BrowserRouter>
    <div className="container">
      <Header/>
      <div data-theme="dark" className="content">
        {children}
      </div>
        <Footer/>
    </div>
      </BrowserRouter>
  )
}
