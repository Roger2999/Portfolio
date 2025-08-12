import { useMutation } from "@tanstack/react-query";

import { registerService } from "../services";
import { useNavigate } from "react-router-dom";
import { RegStore } from "../store/RegStore/RegStore";

export const useRegister = () => {
  const navigate = useNavigate();
  const register = RegStore((state) => state.register);
  const mutation = useMutation({
    mutationFn: registerService,
    onSuccess: (data, variables) => {
      navigate("/home");
      register(data.token, variables.email);
    },
    onError: (err) => {
      alert("Error en el registro: " + (err?.message || "Intenta nuevamente"));
    },
  });
  return mutation;
};
