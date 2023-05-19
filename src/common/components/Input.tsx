import { useFormContext } from "react-hook-form";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
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

type peopleSuggest ={
  id : number,
  name : string
}

const people : peopleSuggest[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
export const InputWithSearch = ()=> {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fixed top-16 w-72">
        <Combobox value={selectedPeople} onChange={setSelectedPeople} multiple>
          <div className="relative mt-1">
            <div className="relative w-full cursor-pointer overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(people : peopleSuggest[]) =>
                  people.map((person: { name:string; }) => person.name).join(", ")
                }
              />
             
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-success cursor-pointer" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                             
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
}