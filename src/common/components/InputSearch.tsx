import Select from "react-select";
import { useForm, Controller, SubmitHandler, useFormContext } from "react-hook-form";

interface IFormInput {
  membersType: { label: string; value: string };
}
export const InputWithSearch = () => {
  const { control, formState : errors } = useFormContext();

 

  return (
      <Controller
        name="membersType"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
          isMulti
        />}
      />
  );
};