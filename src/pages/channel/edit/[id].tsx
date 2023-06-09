import { EditChannelForm } from "@/common/components";
import { EditChannel } from "@/common/components/channel/EditChanneL";
import { channelProvider } from "@/providers";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";


const EditChannelWithId = () => {


  return (
    <>
     
      <EditChannel/>
    </>
  );
};

export default EditChannelWithId;
