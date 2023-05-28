import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { InputWithSearch } from '../InputSearch';
import { FormProvider, useForm } from 'react-hook-form';
import { channelProvider } from '@/providers';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';


type members ={
  value ?: number[]
}
type ChannelIdType ={
  id : number
}

export const AddMemberToChannel =({id}: ChannelIdType)=> {
  const route = useRouter()
  const [show, setShow] = useState(false);
  const form = useForm<members>({
    defaultValues: {
      value : []
    },
    mode: "all",
  });
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);

  const handleSubmit = form.handleSubmit((member)=>{
    const create = Object.values(member).map(Number)   
    create.shift()
    const members = {
      "members" : create
    }
    const AddmemberToChanbel =async () => {
      const addToChannel = await channelProvider.addMembertoChannel(members,id)
      if(addToChannel){
        route.push(`/channel`)
      console.log(addToChannel);
      
      }else{
        toast('error occurs on adding member')
      }
    }
    AddmemberToChanbel()
     
  })

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add more member
      </Button>
      <FormProvider {...form}>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add m  ember to this group</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body >  
          <InputWithSearch/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="outline-primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
      </FormProvider>
    </>
    
  );
}
