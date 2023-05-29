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

{
  data ?(
    <Dropdown.Menu aria-label="Static Actions">
    {data.map((key, value) => {
      return (
        <>
             <Dropdown.Item key={key.id} >
              <a  >
              {key.name}
              </a>
         
        </Dropdown.Item>
        </>
       
      );
    })}
     <Dropdown.Item key="new">New file</Dropdown.Item>
        <Dropdown.Item key="2">Copy link</Dropdown.Item>
        <Dropdown.Item key="3">Edit file</Dropdown.Item>
        <Dropdown.Item key="4" withDivider color="error">  Delete file
        </Dropdown.Item>
  </Dropdown.Menu>
  ) : <>
  No {status}
  </>
  
}
</Dropdown> */}
  {/*
  FIXME : change this dropdow, as the template in the button
  */}
 <Dropdown>
      <Dropdown.Button flat>{type}</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">User 1</Dropdown.Item>
        <Dropdown.Item key="copy">Copy link</Dropdown.Item>
        <Dropdown.Item key="edit">Edit file</Dropdown.Item>
        <Dropdown.Item key="delete" withDivider color="error">
          Delete file
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</>
    );
  }
;
