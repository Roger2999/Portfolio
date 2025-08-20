import { useMutation } from "@tanstack/react-query";

import { AuthStore } from "../store";
import { authService } from "../services";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const Login = AuthStore((state) => state.login);
  const mutation = useMutation({
    mutationFn: authService,
    onSuccess(data, variables) {
      Login(data.token, variables.email);
      navigate("/private/dashboard");
    },
    onError(err) {
      alert("Error en el login: " + (err?.message || "Intenta nuevamente"));
    },
  });

  return {
    mutation,
  };
};
