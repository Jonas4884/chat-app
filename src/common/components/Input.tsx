import { useFormContext } from "react-hook-form";

type InputProps = {
  label : string;
  name : string;
  validate?: any
}

const getInputId = (name: string) => `${name}-input`

const InputClassCheck = (isError: boolean) => 
`rounded-md border ${ 
  isError ? 'border-gray-200' : 'border-red-500'}`
export const Input = (props: InputProps) =>{
  const{label,name,validate} = props;
  
  const {
    register,
    formState: {errors},
  } = useFormContext();
  const error = errors[name]

  return(
    <div>
      <input {
        ...register(name,{validate})
      } 
      className={InputClassCheck(!error)}
      placeholder={label}
      id={getInputId(name)}
      />
      {
        !!error && (
          <span className="absolute right-O text-red-300">
              {error.message as string}
          </span>
        )
      }

    </div>
  )
}