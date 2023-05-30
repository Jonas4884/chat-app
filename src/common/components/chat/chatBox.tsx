import React from "react";
import {
  MDBContainer,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBCardFooter,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { chatMessage, RestChatMessage} from "@/common/types";
import { MessageProvider, authProvider } from "@/providers";
import { useGlobalStore } from "@/userContext";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import {  Input } from "../Input";

type ChatBoxProps = {
  data?: RestChatMessage[]
}
type RestChat = {
  data: RestChatMessage
}

const DefaultChatMessage : RestChatMessage[] = [
  {
    id:1,
    content:'',
    recepientid:1,
    senderid:1,
    channelid:1,
    createedAt:"now",
    sender : {
      id : 1,
      name : "john"
    }
}]
const MessagePosition = ({ data }: RestChat) => {
  return `d-flex flex-row justify-content-${data.senderid !== data.sender?.id ? 'start' : 'end'}`
}

export const ChatBox = ({ data }: ChatBoxProps) => {
  const route = useRouter();
  const channelId = Number(route.query.id)
  const form = useForm<chatMessage>({
    defaultValues: DefaultChatMessage.at(0),
    mode: 'all',

  });

  const handleSubmit = form.handleSubmit((message: chatMessage) => {
    
    message.channelid = channelId;
    const userMessage = { ...message};
    const sendMessage = async () => {
      try {
        await MessageProvider.SendMessage(userMessage);
      } catch (error) {
        console.log(error);
        
        alert("error occurs on sending message "+ {error})
      }
      
    };
    sendMessage()
  });
  return (
    <div className="chat mx-0">
      <div className="d-flex justify-content-center mr-3">
        <div >
          <div>
            <div
              className="d-flex justify-content-between align-items-center p-3 chat-box__back"
              style={{ borderTop: "4px solid #ffa900" }}
            >
              <h5 className="mb-0 text-white">Chat messages</h5>
              <div className="d-flex flex-row align-items-center">
                <span className="badge bg-warning me-3">20</span>
                <MDBIcon
                  fas
                  icon="minus"
                  size="xs"
                  className="me-3 text-muted"
                />
                <MDBIcon
                  fas
                  icon="comments"
                  size="xs"
                  className="me-3 text-muted"
                />
                <MDBIcon
                  fas
                  icon="times"
                  size="xs"
                  className="me-3 text-muted"
                />
              </div>
            </div>

            <MDBCardBody>
             {
              typeof data !== "undefined" ?
               data.map((key, value) => {
                  return (
                    <>
                      <div className="d-flex justify-content-between" key={key.id}>
                        <p className="small mb-1">{key.sender?.name}</p>
                        <p className="small mb-1 text-muted">23 Jan 2:00 pm</p>
                      </div>
                      <div className={MessagePosition(data)}>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "100%" }}
                        />
                        <div>
                          <p
                            className="small p-2 ms-3 mb-3 rounded-3"
                            style={{ backgroundColor: "#f5f6f7" }}
                          >
                            {key.content}
                          </p>
                        </div>
                      </div>
                    </>
                  )
                })
                : <p>NO correspondant Chat</p>
              }
              

            </MDBCardBody>

            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <MDBInputGroup className="mb-0">

                <FormProvider {...form}>
                  <form action="" onSubmit={handleSubmit}>
                  <Input name="message" label="messsage"/>
                  <button  type="submit">
                  Send
                </button>
                  </form>
                </FormProvider>                
              </MDBInputGroup>
            </MDBCardFooter>
          </div>
        </div>
      </div>
    </div>
  );
}
