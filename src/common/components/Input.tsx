import { useFormContext } from "react-hook-form";

type InputProps = {
  label : string;
  name : string;
  validate?: any
}

const getInputId = (name: string) => `${name}-input`

const InputClassCheck = (isError: boolean) => 
`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${ 
  isError ? 'border-gray-200' : 'border-red-500'}`
export const Input = (props: InputProps) =>{
  const{label,name,validate} = props;
  
  const {
    register,
    formState: {errors},
  } = useFormContext();
  const error = errors[name]
  

  return(
    <div className="relative mb-4">
      <input {
        ...register(name,{validate})
      } 
      className={InputClassCheck(!error)}
      placeholder={label}
      id={getInputId(name)}
      />
      {
        !!error && (
          <span className="absolute right-O text-red-400">
              {error.message as string}
          </span>
        )
      }

    </div>
  )
}