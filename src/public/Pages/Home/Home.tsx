import { NavLink } from "react-router-dom"


export const Home = () => {
  return (
    <>
    
    <div>Home</div>
    <NavLink to={"/login"}>
      <button type="button" >Login</button>
    </NavLink>
    <NavLink to={"/register"}>
    <button type="button">Register</button>
    </NavLink>
    </>
  )
}
