import { useAuthenticate } from "@/common/hooks";
import { Input, Layout } from '@/common/components';
import { CreateUser, LoginUser } from '@/common/types';
import { cache } from '@/common/utils';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { useGlobalStore } from "@/userContext";
import { authProvider } from "@/providers/auth-provider";



const userSignInDefaultValues: LoginUser = {
  email: '',
  password: '',
};

// TODO : You can use useSWRStation
const SignInPage = () => {
  const form = useForm<CreateUser>({
    defaultValues: userSignInDefaultValues,
    mode: 'all',

  });
  const { push } = useRouter();
  const { setUser, setErrorMessage } = useGlobalStore();

  const handleSubmit = form.handleSubmit((createUser: CreateUser) => {
    const user = { ...createUser };
    delete user.confirmPassword;
    const login = async () => {
      const { redirection, data, authenticate } = await authProvider.signIn(user);
      if (authenticate) {        
        setUser(data);
        push(redirection)
      } else {
        setErrorMessage(data);
      }
    };
    login()
  });

  return (
    <Layout>
      <FormProvider {...form}>
        <div className="back">
          <div className="div-center">
            <div className="content">
              <h3>Login for SLACK</h3>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <Input label='Email' name='email' />
                  <Input label='Password' name='password' />
                </div>
                <button type="submit" className="btn btn-outline-primary form-login__label" >Login</button>
                <hr />
                <button type="button" className="btn btn-link form-login__label">Signup</button>
                <button type="button" className="btn btn-link">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </FormProvider>
    </Layout>
  )
}

export default SignInPage;