import { useAuthenticate } from "@/common/hooks";
import { Input, Layout } from '@/common/components';
import { CreateChannel, LoginUser } from '@/common/types';
import { cache } from '@/common/utils';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { useGlobalStore } from "@/userContext";
import { authProvider } from "@/providers/auth-provider";
import { channelProvider } from "@/providers";
import { toast } from "react-toastify";
import CreateNewChannel from "@/common/components/channel/CreateChannel";


const channelDefaultValue: CreateChannel = {
  name : '',
  type : '',
  members : ''
};


const CreateChannel = () => {


  return (
    <Layout>
      <CreateNewChannel/>
    </Layout>
  )
}

export default CreateChannel;