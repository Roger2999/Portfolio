
import { Portfolio } from "./Portfolio"
import { About, Contact, Home, Login, Projects, Skills } from "./public/Pages"
import { PrivateGuard } from "./private/PrivateGuard"
import { PrivateRoutes } from "./private/PrivateRoutes"
import { PageNotFound } from "./components/PageNotFound/PageNotFound"
import { Register } from "./public/Pages/Register/Register"
import { Navigate, Route } from "react-router-dom"

export const PortfolioRoutes = () => {
  return (
   <>
    <Portfolio>
        
            <PageNotFound>            
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element ={<PrivateGuard/>}>
                <Route path="/private/*" element={<PrivateRoutes/>}/>
            </Route>
            </PageNotFound>
    </Portfolio>
   </>
  )
}
