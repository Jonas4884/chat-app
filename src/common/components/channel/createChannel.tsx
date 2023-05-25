import { useAuthenticate } from "@/common/hooks";
import { Input, Layout } from "@/common/components";
import { CreateChannel, LoginUser, User } from "@/common/types";
import { cache } from "@/common/utils";
import { useRouter } from "next/router";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useGlobalStore } from "@/userContext";
import { authProvider } from "@/providers/auth-provider";
import { channelProvider } from "@/providers";
import { toast } from "react-toastify";
import Select from "react-select";
import { useEffect, useState } from "react";
import { userProvider } from "@/providers/user-provider";
import { type } from "os";
import { Form } from "react-bootstrap";
import { Radio } from "./Radio";

const channelDefaultValue: CreateChannel = {
  name: "",
  type: "",
  members: "",
};
type CreateChannelProps = {
  data?: User[];
};
const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];
const CreateNewChannel = () => {
  const form = useForm<CreateChannel>({
    defaultValues: channelDefaultValue,
    mode: "all",
  });
  const dataSelected = useForm();
  const { push } = useRouter();
  const [data, setData] = useState();
  useEffect(() => {
    userProvider.getUsers().then((res) => {
      setData(res);
    });
  }, []);

  const handleSubmit = form.handleSubmit((createChannel: CreateChannel) => {
    const createdChannel = { ...createChannel };
    const createNewChannel = async () => {
      const resutlChannel = await channelProvider.createNewChannel(
        createdChannel
      );
      const id = resutlChannel.data.channel.id;
      if (resutlChannel) {
        push(`/channel/${id}`);
      } else {
        toast("error on creating channel");
      }
    };
    createNewChannel();
  });

  return (
    <Layout>
      <FormProvider {...form}>
        <div className="back">
          <div className="div-center">
            <div className="content">
              <h3>Add new Channel</h3>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <Input label="name" name="name" />
                  <Radio value="public"   />
                  <Radio value="private"   />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary form-login__label"
                >
                  Add Channel
                </button>
                <hr />
                <button
                  type="button"
                  className="btn btn-link form-login__label"
                  onClick={() => push("/channel")}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </FormProvider>
    </Layout>
  );
};

export default CreateNewChannel;
