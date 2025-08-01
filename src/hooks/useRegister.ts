import { useMutation } from "@tanstack/react-query";

import { registerService } from "../services";



export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: registerService,
    // Puedes agregar lógica en onSuccess si necesitas guardar usuario, redirigir, etc.
  });
  return mutation;
};
