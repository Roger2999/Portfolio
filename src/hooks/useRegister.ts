import { useMutation } from "@tanstack/react-query";

import { registerService } from "../services";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: registerService,
    onSuccess: () => {
      console.log("Registro exitoso");
      navigate("/home");
    },
    onError: (err) => {
      alert("Error en el registro: " + (err?.message || "Intenta nuevamente"));
    },
  });
  return mutation;
};
