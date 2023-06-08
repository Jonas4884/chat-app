import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

import { useGlobalStore } from "@/userContext";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { Input } from "@/common/components";
import { CreateUser, User } from "@/common/types";
import { FormProvider, useForm } from "react-hook-form";
import { userProvider } from "@/providers/user-provider";
import { toast } from "react-toastify";
import { TextArea } from "../TextArea";

export const UserProfile = () => {
  const user = useGlobalStore();
  const { setUser, setErrorMessage } = useGlobalStore();
  const router = useRouter();
  const LoggedUser = user.user;
  const [userInfo, setUserInfo] = useState<CreateUser[]>([]);
  const defaultUser: CreateUser = {
    name: LoggedUser?.name ?? "",
    email: LoggedUser?.email ?? "",
    password: LoggedUser?.email ?? "",
  };
  const form = useForm<CreateUser>({
    defaultValues: defaultUser,
    mode: "all",
  });

  const handleSubmit = form.handleSubmit((createUser: CreateUser) => {
    const user = { ...createUser };
    delete user.confirmPassword;
    const sendUserToUpdate = async () => {
      try {
        const userData = await userProvider.updateUser(createUser);
        setUser(userData?.data.user);       
        
        router.push("/channel")
        toast(`user information updated`, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      } catch (error: any) {
        setErrorMessage(error.message);

        toast(`${error.message},something wrong on updating you information`, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      }
    };
    sendUserToUpdate();
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "#e0e0e0" }}>
      <div className="container rounded bg-white mt-5 mb-5 profile-card">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">{user.user?.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>

              <FormProvider {...form}>
                <form onSubmit={handleSubmit}
                > <div className="row mt-2">
                <Input type="text" name="name" label="Name" className="col-md-6" />
              </div>
              <div className="row mt-3">
                <Input
                  name="email"
                  label="email"
                  type="email"
                  className="col-md-6"
                />
                <Input
                  name="currentPassword"
                  label="password"
                  type="password"
                  className="col-md-6"
                />
                <Input
                  name="newPassword"
                  label="password"
                  type="password"
                  className="col-md-6"
                />

                {/* TODO: How can i get user password */}
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  className="col-md-6"
                />
                <TextArea name="bio" label="bio" className="col-md-6" />
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button updateProfileButton"
                  type="submit"
                >
                  Save Profile
                </button>
              </div>
              </form>
              </FormProvider>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
