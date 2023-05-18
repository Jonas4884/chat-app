import React from "react";
import {
  MDBContainer,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBCardFooter,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export const ChatBox = ()=> {
  return (
    <div  className="chat">
      <div className="d-flex justify-content-center">
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
                <div className="d-flex justify-content-between">
                  <p className="small mb-1">Timona Siera</p>
                  <p className="small mb-1 text-muted">23 Jan 2:00 pm</p>
                </div>
                <div className="d-flex flex-row justify-content-start">
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
                      For what reason would it be advisable for me to think
                      about business content?
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="small mb-1 text-muted">23 Jan 2:05 pm</p>
                  <p className="small mb-1">Johny Bullock</p>
                </div>
                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">
                      Thank you for your believe in our supports
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <p className="small mb-1">Timona Siera</p>
                  <p className="small mb-1 text-muted">23 Jan 5:37 pm</p>
                </div>
                <div className="d-flex flex-row justify-content-start">
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      similique quae consequatur
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="small mb-1 text-muted">23 Jan 6:10 pm</p>
                  <p className="small mb-1">Johny Bullock</p>
                </div>
                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">
                      Dolorum quasi voluptates quas amet in repellendus
                      perspiciatis fugiat
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>
              </MDBCardBody>
           
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <MDBInputGroup className="mb-0">
                <input
                  className="form-control"
                  placeholder="Type message"
                  type="text"
                />
                <MDBBtn color="warning" style={{ paddingTop: ".55rem" }}>
                  Button
                </MDBBtn>
              </MDBInputGroup>
            </MDBCardFooter>
          </div>
        </div>
      </div>
    </div>
  );
}
