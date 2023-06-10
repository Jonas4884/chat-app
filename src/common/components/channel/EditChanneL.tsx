import { EditChannelForm } from "@/common/components";
import { channelProvider } from "@/providers";
import { Radio } from "flowbite-react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type members = {
  value?: number[];
};
export const EditChannel = () => {
  const route = useRouter();
  const id = Number(route.query.id!);

  const form = useForm<members>({
    defaultValues: {
      value: [],
    },
    mode: "all",
  });
  useEffect(() => {
    const getDataById = channelProvider.getChannelById(id);
  });
  const handleSubmit = form.handleSubmit((member) => {
    const create = Object.values(member).map(Number);
    create.shift();
    const members = {
      members: create,
    };
    const AddmemberToChanbel = async () => {
      const addToChannel = await channelProvider.addMembertoChannel(
        members,
        id
      );
      if (addToChannel) {
        route.push(`/channel`);
        console.log(addToChannel);
      } else {
        toast("error occurs on adding member");
      }
    };
    AddmemberToChanbel();
  });

  return (
    <>
     <Stack gap={2} className="col-md-5 mx-auto mt-5">
     <Card className="text-center w-100 ">
        <Card.Header className="my-3">Update Channel</Card.Header>
        <Card.Body className="my-2">
          <Card.Title>Channel Name</Card.Title>
          <Card.Text>
            <FormProvider {...form}>
            <form onSubmit={handleSubmit} className="my-3 pb-3">
              <EditChannelForm />
              <Radio value="public"   />
                  <Radio value="private"   />
            <Button variant="outline-secondary" className="my-3" onClick={() => route.back()}>
              Close
            </Button>
            <Button type="submit" className="mx-3 editChannelButton" onClick={() => route.back()} variant="outline-primary">
              Save Changes
            </Button>
            </form>
            </FormProvider>
            
          </Card.Text>
        </Card.Body>
      </Card>
     </Stack>
      
       
      
    </>
  );
};

