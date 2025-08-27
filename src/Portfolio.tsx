import type { ReactNode } from "react"
import { Footer, Header } from "./components"
import { BrowserRouter } from "react-router-dom"
// ...existing code...
interface Props {
    children: ReactNode
}

export const Portfolio = ({children}:Props) => {
  return (
    <BrowserRouter>
    <div data-theme={"light"} className="container">
      <Header/>
      <div  className="content" >
        {children}
      </div>
        <Footer/>
    </div>
      </BrowserRouter>
  )
}
