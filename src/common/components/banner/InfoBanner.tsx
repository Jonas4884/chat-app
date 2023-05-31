import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { AddMemberToChannel } from '../channel';
import { useRouter } from 'next/router';
type ChannelInfoProps = {
  id : number
}
export const ChannelInfo =({id}: ChannelInfoProps)=> {
  const route = useRouter()
  return (
    <div className="w-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol >
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://th.bing.com/th/id/R.364ffcc5aa14fef2b30509010b5d4531?rik=AkzlgCG8Uz3QpQ&pid=ImgRaw&r=0"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Channel Name</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Programmer <span className="mx-2">|</span> <a href="#!">student channel</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                <div>
                  <Button onClick={()=>route.push(`edit/${id}`)}>
                    Edit this Channel
                  </Button>
                    </div>
              
                
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">84</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Member</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">12</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Invitation</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">47</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total hashtag</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}