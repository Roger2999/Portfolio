import type { RegisterForm } from "../../models/register.model"



export const registerService = async (data: RegisterForm):Promise<{token:string}>=>{
    const response = await fetch ("https://reqres.in/api/register", {
       method: "POST",
       headers:  {'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: data.email,
            password: data.password
          })
    })
    if(!response.ok){
        throw new Error(`Error in the response: ${response.status}${response.statusText}`);
        
    }
    const result = await response.json();
    console.log('Respuesta registro:', result);
    return result;
}