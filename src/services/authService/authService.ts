
import type { LoginForm } from "../../models/formModel"

export const authService = async (data:LoginForm):Promise<{ token: string }> => {
  const response = await fetch ('https://reqres.in/api/login', {
    method: "POST",
    headers:{'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json'},
          body: JSON.stringify(
            {
            email:data.email,
            password: data.password
          })
  })
  if(!response.ok){
    throw new Error(`Error in the response: ${response.status} ${response.statusText}`);
  }
  return response.json()
}
