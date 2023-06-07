import { Input, InputWithSearch, Layout } from "@/common/components";
import { CreateChannel } from "@/common/types";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { channelProvider } from "@/providers";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { userProvider } from "@/providers/user-provider";
import { Radio } from "./Radio";

const channelDefaultValue: CreateChannel = {
  name: "",
  type: "",
};


const CreateNewChannel = () => {
  const form = useForm<CreateChannel>({
    defaultValues: channelDefaultValue,
    mode: "all",
  });
  const { push } = useRouter();
  

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
                  <InputWithSearch/>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary form-login__label createChannelButton"
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
