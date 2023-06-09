import {ComponentPropsWithoutRef, forwardRef} from "react";
import { useFormContext } from "react-hook-form";



export const Radio = ()=>{
    const {
        register,
        formState: {errors},
      } = useFormContext();
    
      
    return (
        <div className="flex items-center mr-4">
                      <select 
                     
                      
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:rounded-full  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {
                          ...register("type")
                        }  >
                        <option value="public">public</option>
                        <option value="private">private</option>
                      </select>
                    </div>
                    
      );
}
