import { useAuthenticate } from "@/common/hooks";
import { Input, Layout } from '@/common/components';
import { CreateChannel, LoginUser } from '@/common/types';
import CreateNewChannel from "@/common/components/channel/CreateChannel";





const CreateChannelPage = () => {


  return (
    <Layout>
      <CreateNewChannel/>
    </Layout>
  )
}

export default CreateChannelPage;