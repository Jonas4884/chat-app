import {ComponentPropsWithoutRef, forwardRef} from "react";
import { useFormContext } from "react-hook-form";

export type RadioProps = {
  value: string;
} 

export const Radio = ({value}: RadioProps)=>{
    const {
        register,
        formState: {errors},
      } = useFormContext();
      const error = errors[value]
      
    return (
        <div className="flex items-center mr-4">
                      <input
                        id={`${value}-radio` }
                        type="radio"
                        value={value}
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:rounded-full  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        {
                            ...register("type")
                          } 
                      />
                      <label
                        htmlFor={`${value}-radio` }
                        className="ml-4 text-red"
                      >
                        {value}
                      </label>
                    </div>
      );
}
