
import { useMutation } from '@tanstack/react-query';

interface LoginParams {
  user: string;
  password: string;
}

interface TokenResponse {
  token: string;
}

// Puedes cambiar la URL_BASE por la de tu API (ejemplo: 'https://reqres.in/api/login')
export const useFetchApi = (URL_BASE: string) => {
  // Mutación para login y obtención de token
  const loginMutation = useMutation<TokenResponse, Error, LoginParams>({
    mutationFn: async (data: LoginParams) => {
      const response = await fetch(URL_BASE, {
        method: 'POST',
        headers: {
          'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.user, // Reqres espera 'email' y 'password'
          password: data.password,
        }),
      });
      if (!response.ok) {
        throw new Error('Login fallido');
      }
      return response.json();
    },
  });

  return {
    loginMutation,
  };
};
