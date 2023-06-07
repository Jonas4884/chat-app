import { useAuthenticate } from "@/common/hooks";
import { Input, Layout } from "@/common/components";
import { CreateUser, LoginUser } from "@/common/types";
import { cache } from "@/common/utils";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useGlobalStore } from "@/userContext";
import { authProvider } from "@/providers/auth-provider";
import { Button, Toast } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { log } from "console";

const userSignInDefaultValues: LoginUser = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const form = useForm<CreateUser>({
    defaultValues: userSignInDefaultValues,
    mode: "all",
  });
  const { push } = useRouter();
  const { setUser, setErrorMessage } = useGlobalStore();

  const handleSubmit = form.handleSubmit((createUser: CreateUser) => {
    const user = { ...createUser };
    delete user.confirmPassword;
    const login = async () => {
      const { redirection, data, authenticate } = await authProvider.signIn(
        user
      );
      if (authenticate) {
        setUser(data);
        toast(`Welcome to Sleek`, { hideProgressBar: true, autoClose: 2000, type: 'success' })

        push(redirection);
      } else {
        setErrorMessage(data);
        console.log(data);
        
        toast(`${data.message},please sign-up`, { hideProgressBar: true, autoClose: 2000, type: 'error' })
       
      }
    };
    login();
  });

  //   import { useState } from 'react'
  // import useSWRMutation from 'swr/mutation'

  // const fetcher = url => fetch(url).then(res => res.json())

  // const Page = () => {
  //   const [show, setShow] = useState(false)
  //   // data is undefined until trigger is called
  //   const { data: user, trigger } = useSWRMutation('/api/user', fetcher);

  //   return (
  //     <div>
  //       <button onClick={() => {
  //         trigger();
  //         setShow(true);
  //       }}>Show User</button>
  //       {show && user ? <div>{user.name}</div> : null}
  //     </div>
  //   );
  // }
  return (
    <Layout>
      <FormProvider {...form}>
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login to Sleek
                        </p>
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <Input label="Email" name="email" />
                          <Input label="Password" name="password" />
                          <Button variant="succes" type="submit">
                            Login
                          </Button>
                        </form>
                        <Button
                          variant="outline-succes"
                          className="btn btn-light"
                          onClick={() => {
                            push("/sign-up");
                          }}
                        >
                          Sign-up
                        </Button>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FormProvider>
    </Layout>
  );
};

export default SignInPage;
