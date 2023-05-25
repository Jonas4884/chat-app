import { Controller, useFormContext} from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { User } from '../types';
import { useState } from 'react';


const animatedComponents = makeAnimated();
type InputWithSearchProps = {
    value :  unknown,
    option : unknown
}
const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

export const InputWithSearch = ({value,option} :InputWithSearchProps)=> {
 
    const {
        register,
        formState: {errors},
      } = useFormContext();
     
  return (
    <>
    
                      <Select {...register("members")} options={options} isMulti />
                 
    </>
   
  );
}