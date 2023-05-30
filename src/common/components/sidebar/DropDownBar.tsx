import { Channel } from "@/common/types";
import { Dropdown } from "@nextui-org/react";


type SideBarProps = {
  type: string;
  status : string;
  data?: Channel[];
};
export const DropdownArea = ({ type, data,status }: SideBarProps) => {
    return (
      <>
        {/* <Dropdown>
          <Dropdown.Button flat id="dropdown-basic">
            {type}
          </Dropdown.Button>


</Dropdown> */}
  {/*
  FIXME : change this dropdow, as the template in the button
  */}
 <Dropdown>
      <Dropdown.Button flat>{type}</Dropdown.Button>
      {
  data ?(
    <Dropdown.Menu aria-label="Static Actions">
    {data.map((key, value) => {
      return (
             <Dropdown.Item key={key.id} >
              {key.name}
        </Dropdown.Item>
      );
    })}
  </Dropdown.Menu>
  ) : <p>
  No {status}
  </p>
}
</Dropdown>
  </>)}
