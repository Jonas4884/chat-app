import { useAuthenticate } from "@/common/hooks";
import { Input, Layout } from '@/common/components';
import { CreateUser, LoginUser } from '@/common/types';
import { cache } from '@/common/utils';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

const userSignInDefaultValues: LoginUser = {
    email: '',
    password: '',
  };
  
  const SignInPage = () => {
    const form = useForm<CreateUser>({
      defaultValues: userSignInDefaultValues,
      mode: 'all',
    });
    const { push } = useRouter();
  
    const handleSubmit = form.handleSubmit((createUser: CreateUser) => {
      const user = { ...createUser };
      delete user.confirmPassword;
      cache.user(user);
      push('/chat');
    });
    return (
        <>
           
        </>
    )
}

export default SignInPage;