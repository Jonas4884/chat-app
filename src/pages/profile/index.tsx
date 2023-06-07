import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

import { useGlobalStore } from '@/userContext';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { Input } from '@/common/components';


export default function PersonalProfile() {
      const user = useGlobalStore()
      const router = useRouter()
      const LoggedUser = user.user;
      
  return (
    <>
    Hello world</>
  );
}