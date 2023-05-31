import { Channel } from "@/common/types";
import { Dropdown, Grid, Link } from "@nextui-org/react";
import { useRouter } from "next/router";

type SideBarProps = {
  type: string;
  status: string;
  data?: Channel[];
  redirect?: string
};
export const DropdownArea = ({ type, data, status,redirect }: SideBarProps) => {
  const route = useRouter();
  return (
    <>
      <div className="ml-3 my-2 w-100 ">
      <Grid.Container gap={1.5} xs={12}>
        <Dropdown >
          <Dropdown.Button >{type}</Dropdown.Button>
          {data ? (
            <Dropdown.Menu aria-label="Static Actions">
              {data.map((key, value) => {
                return (
                  <Dropdown.Item key={key.id} color={"default"}>
                    <Link onClick={() => route.push(`/${redirect}/${key.id}`)}>
                      {key.name}
                    </Link>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          ) : (
            <p>No {status}</p>
          )}
        </Dropdown>
        </Grid.Container>
       <hr />
      </div>
    </>
  );
};
