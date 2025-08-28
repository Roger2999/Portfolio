import type { ReactNode } from "react"
import { Footer, Header } from "./components"
import { BrowserRouter } from "react-router-dom"
import { ThemeStore } from "./store/ThemeStore/ThemeStore"
// ...existing code...
interface Props {
    children: ReactNode
}

export const Portfolio = ({children}:Props) => {
  const toggleTheme = ThemeStore((state) => state.toggleTheme);
  const theme = ThemeStore((state) => state.theme);

  return (
    <BrowserRouter>
    <div data-theme={theme} className="container">
      <Header/>
      <div className="theme flex justify-end p-10">
      <button type="button" className="btn" onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
      </div>
      <div  className="content" >
        {children}
      </div>
        <Footer/>
    </div>
      </BrowserRouter>
  )
}
