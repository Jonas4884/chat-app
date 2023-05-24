import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Input, InputWithSearch } from '../Input';
import { ChannelforDomain, CreateUser } from '@/common/types';
import { FormProvider, useForm } from 'react-hook-form';
import { channelProvider } from '@/providers';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import { useRouter } from 'next/router';

const ChannelDefaultValue = {
  name: '',
  type: '',
  members: ''
}
export const CreateChannel = () => {
  const [show, setShow] = useState(false);
  const route = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useForm<ChannelforDomain>({
    defaultValues: ChannelDefaultValue,
    mode: 'all',

  });

  const handleSubmit = form.handleSubmit((CreateChannel: ChannelforDomain) => {
    const channel = { ...CreateChannel }
    const createChannel = async () => {
      const postChannel = await channelProvider.createNewChannel(channel)
      if (postChannel) {
       route.push("/channel")
      }else{
        toast('error on channel creating try to verify channel information')
      }
      
    }
    createChannel();
   
  })

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Channel
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="add-channel__title" >
            {<p className="text-slate-400 hover:text-sky-400">
              Adding Channel
            </p>}
          </Modal.Title>
        </Modal.Header>
        <FormProvider {...form}>
          <form >
            <Modal.Body>
              <Input name='name' label='channel Name' />
              <Input name='type' label='channel Type' />
              <InputWithSearch/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" >
                Cancel
              </Button>
              <Button variant="info" onClick={handleSubmit}>
                Add new Channel
              </Button>
            </Modal.Footer>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}