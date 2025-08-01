import { Navigate, Outlet } from "react-router-dom"
import { AuthStore } from "../store";

export const PrivateGuard = () => {
    const token = AuthStore((state) => state.token);

  return (
    <>
    {token? <Outlet />: <Navigate to={"/home"}/>}
    </>
  )
}
