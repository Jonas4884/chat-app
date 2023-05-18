import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Input } from '../Input';
import { ChannelforDomain, CreateUser } from '@/common/types';
import { FormProvider, useForm } from 'react-hook-form';
import { channelProvider } from '@/providers';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";

const ChannelDefaultValue = {
  name: '',
  type: '',
  members: ''
}
export const CreateChannel = () => {
  const [show, setShow] = useState(false);

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
        console.log("success");
        toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }else{
        toast('error on channel creating try to verify channel information')
      }
      
    }
    createChannel();
    handleClose();
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
              <Input name='members' label='member Name' />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="info" onClick={handleSubmit}>
                Add new Channel
              </Button>
            </Modal.Footer>
          </form>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </FormProvider>


      </Modal>
    </>
  );
}