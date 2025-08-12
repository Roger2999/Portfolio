import { NavLink } from "react-router-dom"
import { CardPresentation } from "../../../components"


export const Home = () => {
  return (
    <>
    <CardPresentation/>
    <NavLink to={"/login"}>
      <button type="button" >Login</button>
    </NavLink>
    <NavLink to={"/register"}>
    <button type="button">Register</button>
    </NavLink>
    </>
  )
}
