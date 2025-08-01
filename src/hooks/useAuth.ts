import { useMutation } from "@tanstack/react-query"

import { AuthStore } from "../store"
import { authService } from "../services"


export const useAuth = () => {

    const Login = AuthStore((state)=> state.login)
    const mutation = useMutation({
        mutationFn: authService,
        onSuccess(data, variables) {
            Login(data.token, variables.email)
        },
    })

  return {
    mutation
  }
   
  
}
