import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Portfolio } from "./Portfolio"
import { Home, Login, Projects, Skills } from "./public/Pages"
import { PrivateGuard } from "./private/PrivateGuard"
import { PrivateRoutes } from "./private/PrivateRoutes"
import { PageNotFound } from "./components/PageNotFound/PageNotFound"

export const PortfolioRoutes = () => {
  return (
   <>
    <Portfolio>
        <BrowserRouter>
            <PageNotFound>            
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route element ={<PrivateGuard/>}>
                <Route path="/private/*" element={<PrivateRoutes/>}/>
            </Route>
            </PageNotFound>
        </BrowserRouter>
    </Portfolio>
   </>
  )
}
