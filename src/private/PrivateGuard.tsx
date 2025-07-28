import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../store";

export const PrivateGuard = () => {
    const token = useAuthStore((state) => state.token);

  return (
    <>
    {token? <Outlet />: <Navigate to={"/home"}/>}
    </>
  )
}
