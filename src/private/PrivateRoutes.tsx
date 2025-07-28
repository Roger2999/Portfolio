import { Navigate, Route } from "react-router-dom"
import { Dashboard } from "./Pages"
import { PageNotFound } from "../components/PageNotFound/PageNotFound"


export const PrivateRoutes = () => {
  return (
    <>
    <PageNotFound>
    <Route path="/" element={<Navigate to="/dashboard"/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    </PageNotFound>
        </>
  )
}
