import { useFormContext,Controller } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { User } from '../types';
import { useState } from 'react';


const animatedComponents = makeAnimated();
type InputWithSearchProps = {
    value :  unknown,
    option : unknown
}
export const InputWithSearch = ({value,option} :InputWithSearchProps)=> {
    const {
        register,
        formState: {errors},
      } = useFormContext();
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}   
      isMulti
    />
  );
}