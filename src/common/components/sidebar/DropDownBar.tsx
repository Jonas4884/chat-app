import { Channel } from "@/common/types";
import Dropdown from "react-bootstrap/Dropdown";

type SideBarProps = {
  type: string;
  status : string;
  data?: Channel[];
};
export const DropdownArea = ({ type, data,status }: SideBarProps) => {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {type}
          </Dropdown.Toggle>

{
  data ?(
    <Dropdown.Menu>
    {data.map((key, value) => {
      return (
        <Dropdown.Item key={key.id} href={`/${status}/${key.id}`}>
          {key.name}
        </Dropdown.Item>
      );
    })}
  </Dropdown.Menu>
  ) : <>
  No {status}
  </>
  
}
</Dropdown>
</>
    );
  }
;
