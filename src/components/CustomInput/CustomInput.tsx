import { Controller, type Control, type FieldError, type FieldValues } from "react-hook-form"

 

import type { Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  error?: FieldError;
  label: string;
  name: Path<T>;
  type?: string;
}
export const CustomInput = <T extends FieldValues>({ control, error, label, name, type }: Props<T>) => {
  return (
   <>
   <div className="input-container">


    <label htmlFor={name}>{label}</label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input {...field} type={type} id={name} className={`input ${error ? 'input input-secondary' : ''}`} />
            )}
          />
          {error && <span style={{ color: 'red' }}>{error.message}</span>}
   </div>
   </>
  )
}
