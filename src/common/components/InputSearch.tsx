import Select, { MultiValue } from "react-select";
import { useForm, Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { userProvider } from "@/providers/user-provider";
import { useEffect, useState } from "react";
import { User, UserforDomain } from "../types";

type membersType ={
    value ?: number,
    label?: string  
}
export const EditChannelForm = () => {
  const { control, formState : errors } = useFormContext();
  const [userData,setUserData] = useState<UserforDomain[]>(); 
  const [selectedOption, setSelectedOption] = useState<MultiValue<membersType>>();
    
  useEffect(()=>{
    userProvider.getUsers().then((response)=>{setUserData(response)});
    
  },[userData])
  const userOption: membersType[] | undefined = userData?.map((user: UserforDomain) => ({
    value: user.id,
    label: user.name
  }));
 
  return (
      <Controller
        name="members"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={userOption} 
          value={selectedOption}
          onChange={(selected) => {
            setSelectedOption(selected);
            field.onChange(selected?.map((option) => option.value)); // Pass the selected option values as the field value
          }}
          isMulti
        />}
      />
  );
};